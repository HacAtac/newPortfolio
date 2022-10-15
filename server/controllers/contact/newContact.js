import expressAsyncHandler from "express-async-handler";
import Contact from "../../models/Contact.js";

export const contactMe = expressAsyncHandler(async (req, res, next) => {
  try {
    //spread operator the the req.body
    const contact = await Contact.create({ ...req.body });
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json.send(`Error: ${error.message}`);
  }
});

export default contactMe;
