import express from "express";
import {
  getAllProverbs,
  getProverbById,
  addProverb,
  updateProverb,
  deleteProverb,
  getRandomProverb,
  searchProverbs,
} from "../controllers/proverbsController.js";

const router = express.Router();

router.get("/", searchProverbs);
router.get("/random", getRandomProverb);
router.get("/:id", getProverbById);
router.post("/", addProverb);
router.put("/:id", updateProverb);
router.delete("/:id", deleteProverb);

export default router;
