import express from 'express';
import path from 'path'
import appRouter from './routes';
import {errors} from 'celebrate'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(appRouter);

app.use(errors());

app.listen(3000, () => {
    console.log('Start');
});
