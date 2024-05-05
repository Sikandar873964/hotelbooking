import express from "express";
import {
  getRooms
} from "../controllers/room.js";

const router = express.Router();

//GET ALL

router.get("/", getRooms);

export default router;
