import mongoose from "mongoose";
import bcyrpt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add a name"],
    },
    lastName: {
      type: String,
    },
    fullName: {
      type: String,
    },

    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
      required: [true, "Please add an email"],
      unique: true,
    },
    profileImageUrl: {
      type: String,
      default: "/images/no-photo.png",
    },

    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 10,
      select: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: "user",
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

// Encrypt password before saving new user
// Should hash the password on registration.
UserSchema.pre("save", async function (next) {
  //conditional will check to see if the password is being modified so it wont update the password constantly.
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcyrpt.genSalt(10);
  this.password = await bcyrpt.hash(this.password, salt);
});

// creates the fullName field.
UserSchema.pre("save", async function () {
  this.fullName = this.firstName + " " + this.lastName;
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcyrpt.compare(enteredPassword, this.password);
};
// enforces that the email string be lower case throughout, as if it isnt, a user with
// test@email.com and a user Test@email.com do not match, and you can end up with duplicate emails..
UserSchema.pre("save", async function (next) {
  this.email = this.email.toLowerCase();
  next();
});

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = async function () {
  // Generate a token
  // this returns a buffer, we want to make it into a string
  const resetToken = crypto.randomBytes(20).toString("hex");
  // Hash token and set to resetPasswordToken field.
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set expiration, 10 minutes
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

export default mongoose.model("User", UserSchema);
