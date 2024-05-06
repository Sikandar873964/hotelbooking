import express from "express";
import {
  getHotels,
  createHotel
} from "../controllers/hotel.js";
const router = express.Router();

// get all htels
router.get("/", getHotels);

//CREATE
router.post("/", verifyAdmin, createHotel);

export default router;
