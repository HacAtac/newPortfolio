import expressAsyncHandler from "express-async-handler";
import User from "../../models/User.js";
import generateToken from "../../utils/generateToken.js";
import errorHandler from "../../middleware/error.js";

/**
 * @access      Public
 * @route      POST /api/auth/register
 * @desc
 * @note
 */

export const register = expressAsyncHandler(async (req, res) => {
  try {
    const {
      user: { email, username },
    } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(401).json({ message: "User already exists" });
    }
    const usernameExists = await User.findOne({
      username: username.toLowerCase(),
    });
    if (usernameExists) {
      return res.status(401).json({ message: "Username already being used" });
    }

    //when user is registering, check if the email is the same as the username, if it is then reject the registration
    if (email === username) {
      return res
        .status(401)
        .json({ message: "Email and Username cannot be the same" });
    }

    try {
      //Create a new user in the database
      const newUser = await User.create({
        ...req.body.user,
      });

      await newUser.save();

      res.status(201).json({
        ...newUser._doc,
        isAdmin: newUser.role === "admin" ? true : false,
        token: generateToken(newUser._id),
      });
    } catch (error) {
      console.error(error);
      errorHandler(error, req, res);
    }
  } catch (error) {
    console.error(error);
    errorHandler(error, req, res);
  }
});

export default register;
