import express from "express";
import {
  getRooms,getRoom,
  deleteRoom
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//GET ALL
router.get("/", getRooms);

//GET ROOM BY ID
router.get("/:id", getRoom);

//DELETE ROOM BY HOTEL ID
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);




export default router;
