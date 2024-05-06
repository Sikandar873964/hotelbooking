import express from "express";
import {
  getHotels,
  createHotel,
  updateHotel,
  updateHotel,
  getHotel,
  countByCity,
  countByType,
  getHotelRooms
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

//GET HOTEL COUNT BY CITY
router.get("/countByCity", countByCity);

//GET HOTEL COUNT BY TYPE
router.get("/countByType", countByType);

//GET HOTEL ROOMS BY HOTEL ID
router.get("/room/:id", getHotelRooms);


export default router;
