import express from "express";
import { getLatestUser, storeLatestUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getLatestUser);
router.post("/", storeLatestUser);

export default router;
