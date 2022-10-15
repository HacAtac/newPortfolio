import expressAsyncHandler from "express-async-handler";
import path from "path";
import slugify from "slugify";
import sharp from "sharp";
import axios from "axios";
import aws4 from "aws4";
import fs from "fs/promises";
import User from "../../models/User.js";

/* 
  @Desc:   Uploads a photo to the images folder
  @Route:  POST /api/upload
  @Access: Private. Auth Users only

  @Notes: 
          There is two things going on in this function.
          1: We use the native node fs module to upload the image to public/
          images. It resizes and formats it to a .png file.

          2: Once that process is complete, we then upload the image to the 
          user's ${username}/images bucket.

          3: Once that process is completed, we unlink the image from the 
          public/images folder as we no longer need it. Because we serve up 
          photos/videos from CDN not our server.

          4: If all goes well it will respond with the image url and save it.

          5: If there is an error, it will respond with the error message.
*/

export const imageUploader = expressAsyncHandler(async (req, res) => {
  try {
    // console.log(req.files.file)
    if (!req.files) {
      return res.status(400).json({ message: `Please upload a file` });
    }

    const file = req.files.file;
    // make sure image is a photo
    if (!file.mimetype.startsWith("image")) {
      return res
        .status(400)
        .json({ message: `Please make sure to upload an image` });
    }
    // Check file size
    if (file.size > process.env.MAX_FILE_UPLOAD) {
      return res.status(400).json({
        message: `File was too large, please upload an image less than ${process.env.MAX_FILE_UPLOAD} or 1MB`,
      });
    }

    // ***NOTE*** Path.parse() returns a {}, youll need to .name to access {name: String} for slugify
    const fileName = path.parse(file.name);

    // Create custom filename
    file.name = slugify(`${fileName.name}`, { lower: true }) + "-photo.png";
    file.mv(`public/images/${file.name}`, async (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: `Problem with file being moved to filesystem` });
      }
    });

    let width = await sharp(file.data)
      .metadata()
      .then((metadata) => {
        return metadata.width > 300 ? 300 : metadata.width < 300 ? 300 : 300;
      });
    //console.log('width: ', width)
    let height = await sharp(file.data)
      .metadata()
      .then((metadata) => {
        metadata.height = null;
        return metadata.height;
      });
    //console.log(`height: ${height}`)
    const sharpz = await sharp(file.data)
      .resize(width, height)
      .toFormat("png", { palette: true }) //png or webp instead of jpeg
      .toFile(`public/images/${file.name}`);

    //console.log('sharpz: ', sharpz)

    const user = await User.findOne({ username: req.user.username });
    const username = user.username;
    // console.log("user", user);
    const photo = await fs.readFile(`public/images/${file.name}`);

    let request = {
      host: process.env.CDN_HOST,
      method: "PUT",
      url: `https://${process.env.CDN_HOST}/${process.env.CDN_BUCKET}/${username}/images/${file.name}`,
      path: `/${process.env.CDN_BUCKET}/${username}/images/${file.name}`,
      data: photo,
      body: photo,
      headers: {
        "Content-Type": "photo/png",
      },
      service: "s3",
      region: "us-east-1",
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    };

    let signedRequest = aws4.sign(request, {
      accessKeyId: process.env.CDN_KEY,
      secretAccessKey: process.env.CDN_SECRET,
    });

    //delete the Host and Content-Length headers
    delete signedRequest.headers.Host;
    delete signedRequest.headers["Content-Length"];

    const response = await axios(signedRequest);
    // console.log("response", response);
    //need to get the image url from the response and return it to the user
    const imageUrl = `https://${process.env.CDN_HOST}/${process.env.CDN_BUCKET}/${username}/images/${file.name}`;
    await fs.unlink(`public/images/${file.name}`, function (err) {
      if (err) throw err;
    });

    res.json({ imageUrl });
  } catch (error) {
    console.error(error);
    return res.json({
      message: `Problem with uploading photo to Image's Bucket`,
    });
  }
});

export default imageUploader;
