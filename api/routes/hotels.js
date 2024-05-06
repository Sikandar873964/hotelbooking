import express from "express";
import {
  getHotels,
  createHotel,
  updateHotel,
  updateHotel,
  getHotel
} from "../controllers/hotel.js";
const router = express.Router();

// GET ALL HOTELS
router.get("/", getHotels);

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET HOTEL BY ID
router.get("/find/:id", getHotel);


export default router;
