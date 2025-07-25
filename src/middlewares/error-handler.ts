import { Request, Response, NextFunction } from 'express';
import {CustomError} from "../errors/custom-errors";


export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction)=>{

    if (err instanceof CustomError) {
        return res.status(err.statusCode).json(err.serializedError())
    }

    res.status(500).json({message: 'Internal Server Error'});
}