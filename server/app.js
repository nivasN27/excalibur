import express from 'express';
import cors from 'cors';
import { port } from "./utils/constant.js";
import notesController from './controllers/notesController.js';

export const app = express()
app.use(cors())
app.listen(port);

app.use(express.json());

notesController(app);


