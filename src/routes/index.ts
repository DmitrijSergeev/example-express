import { Request, Response, Router } from 'express';

import todosRouter from './todos.js';

const router = Router();

router.use('/todos', todosRouter);

router.all('*path', (req: Request, res: Response) => {
  res.status(404).json({ message: 'not found' });
});

export default router;
