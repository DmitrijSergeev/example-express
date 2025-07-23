import { Router } from 'express'
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from '../controllers/todos';
import {hasValidId} from "../middlewares/hs-valid-id";
import {validateTodoBody} from "../validation/todos";
import {validateParamId} from "../validation/params";

const router = Router();

router.get('/', getAllTodos);

router.get('/:id', validateParamId, getTodoById);

router.post('/', validateTodoBody, createTodo);

router.put('/:id', [hasValidId], updateTodo)

router.delete('/:id', [hasValidId], deleteTodo)

export default router;