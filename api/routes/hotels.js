import express from "express";
import {
  getHotels
} from "../controllers/hotel.js";
const router = express.Router();

// get all htels
router.get("/", getHotels);

export default router;
