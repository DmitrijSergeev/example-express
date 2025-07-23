import {NextFunction, Response, Request} from "express";

export const hasValidId = (req: Request, res: Response, next: NextFunction) => {
    if (Number.isNaN(+req.params.id)){
        res.status(404).json({message: 'Incorrect Id'});
    }
    next();
}