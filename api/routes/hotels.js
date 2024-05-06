import express from "express";
import {
  getHotels,
  createHotel,
  updateHotel
} from "../controllers/hotel.js";
const router = express.Router();

// get all htels
router.get("/", getHotels);

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);


export default router;
