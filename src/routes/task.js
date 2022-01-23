import express from "express";
import { taskController } from '../controllers/task';
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get('/', asyncHandler(taskController.getTasks))
router.post('/', asyncHandler(taskController.addTask))

export default router;