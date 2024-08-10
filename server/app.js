import express from 'express';
import cors from 'cors';
import { port } from "./utils/constant.js";
import notesController from './controllers/notesController.js';
import bodyParser from 'body-parser';

export const app = express()
app.use(cors())
app.listen(port);

app.use(express.json());

app.use(express.json({ limit: '500mb' })); 
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

notesController(app);


