import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

/*
  @Desc:   Authenticates a user.

  @Notes:  This function is how we differentiate between a user, guest, and 
           admin. 
           By calling this function in our routes, we can just pass either 
           protect, or admin into the route and it will protect  the route.
*/

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded._id);
      if (!req.user) {
        return res
          .status(500)
          .json({ message: "Not authorized, token failed" });
      }

      if (req.user.isActive === false) {
        return res
          .status(401)
          .json({ message: "Not authorized, token failed" });
      }
      req.user.token = token;

      next();
    } catch (e) {
      //console.log(e)
      res.status(403).json({ message: "Not authorized, token failed" });
    }
  }
  if (!token) {
    res.status(403).json({ message: "Not authorized, token failed" });
  }
});

const admin = (...roles) => {
  return (req, res, next) => {
    // req.user.role can have multiple roles separated by a space e.g. "admin user" or "admin"
    // check to see if the user.role field is an array, if not, make it an array
    if (!Array.isArray(req.user.role)) {
      req.user.roles = req.user.role.split(" ");
    }
    // check to see if the req.user.roles array container a role that matches a role in the roles array
    // if it doesnt, return a 403 error
    // we need to loop through the roles array and check if the req.user.roles array contains the role
    let valid = false;
    roles.forEach((role) => {
      if (req.user.roles.includes(role)) {
        valid = true;
      }
    });

    if (!valid) {
      return res.status(403).json({ message: "Not authorized" });
    }
    next();
  };
};

export { protect, admin };
