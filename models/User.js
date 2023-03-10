import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name."],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },

  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    required: [true, "Please provide email."],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please provide password."],
    minlength: 6,
    select: false,
  },

  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "lastName",
  },

  location: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
    default: "my city",
  },
});

UserSchema.pre("save", async function () {
  // // const salt = await bcrypt.genSalt(10)
  // // console.log(this.password);
  // // this.password = await bcrypt.hash(this.password, salt)
  // // console.log(this.password)
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));

  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  console.log(this);
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
