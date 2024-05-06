import express from "express";
import {
  getRooms,getRoom
} from "../controllers/room.js";

const router = express.Router();

//GET ALL
router.get("/", getRooms);

//GET ROOM BY ID
router.get("/:id", getRoom);



export default router;
