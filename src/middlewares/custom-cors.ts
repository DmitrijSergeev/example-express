import { Request, Response, NextFunction } from 'express';

const allowedOrigins = ['https://activtrans.ru'];

export const customCors = (req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin ?? '';

    if (allowedOrigins.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');

    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}