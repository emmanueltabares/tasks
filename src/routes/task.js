import express from "express";
import { taskController } from '../controllers/task';
import asyncHandler from "express-async-handler";


const router = express.Router();

router.get('/edit/:id', asyncHandler(taskController.getTaskById));
router.get('/', asyncHandler(taskController.getTasks));
router.post('/', asyncHandler(taskController.addTask));
router.post('/edit/:id', asyncHandler(taskController.updateTask));
router.get('/delete/:id', asyncHandler(taskController.deleteTask));

export default router;