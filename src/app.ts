import express from 'express';
import path from 'path'
import appRouter from './routes';
import {errors} from 'celebrate'
import {errorHandler} from "./middlewares/error-handler";
import {customCors} from "./middlewares/custom-cors";

const app = express();

app.use(customCors)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(appRouter);

app.use(errors());

app.use(errorHandler)

app.listen(3000, () => {
    console.log('Start');
});
