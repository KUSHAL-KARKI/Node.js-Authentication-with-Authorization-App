import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../model/user.js";
const router = express.Router();

router.get("/", (req, res) => {
  const { username } = req.body;
  res.render("home", { user: username });
});

// signup routes
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new User({
      username,
      password,
      role: role || "user",
    });
    await user.save();
    res.redirect("/login");
    console.log("user created successfully");
  } catch (error) {
    console.log(error);
  }
});

// login route
router.get("/login", (req, res) => {
  res.render("login", { error: "" });
});
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .render("login", { error: "Username or password not matched" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    console.log("validPassword", validPassword);
    if (!validPassword) {
      return res
        .status(400)
        .render("login", { error: "Username or password not matched" });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("token", token, { httpOnly: true });
    if (user.role === "admin") {
      return res.redirect("/admin");
    }
    res.render("home", { user: username });
  } catch (error) {
    console.log(error);
  }
});

export default router;
