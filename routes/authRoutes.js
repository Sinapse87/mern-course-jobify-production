import express from "express";
import authenticateUser from "../middleware/auth.js";
import { register, login, updateUser } from "../controllers/authController.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
