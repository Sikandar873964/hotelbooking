import express from "express";
import {
  getUser,
  getUsers,
} from "../controllers/user.js";

const router = express.Router();


//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
