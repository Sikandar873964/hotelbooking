import express from "express";
import {
  getRooms,getRoom,
  deleteRoom,
  updateRoom,
  updateRoomAvailability
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//GET ALL
router.get("/", getRooms);

//GET ROOM BY ID
router.get("/:id", getRoom);

//DELETE ROOM BY HOTEL ID
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//UPDATE BY ROOM BY ID
router.put("/:id", verifyAdmin, updateRoom);

//UPDATE ROOM AVAILABILITY
router.put("/availability/:id", updateRoomAvailability);


export default router;
