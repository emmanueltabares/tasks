import { Router } from 'express';
import taskRouter from './task';

const router = Router();

router.use('/api', taskRouter);

export default router;