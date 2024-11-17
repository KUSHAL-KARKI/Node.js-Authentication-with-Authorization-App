import { authorize } from "../middlewares/authMiddleware.js";
import { Router } from "express";
const router = Router();
router.get("/admin", authorize(["admin"]), (req, res) => {
res.render("admin");
})
export default router;