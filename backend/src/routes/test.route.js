import express from "express";
import { wordtest, timetest, customtest } from "../controllers/test.controllers.js";

const router = express.Router();

router.get("/wordtest", wordtest);
router.get("/timetest", timetest);
router.get("/customtest", customtest);

export default router;