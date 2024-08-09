import express from 'express';
import cors from 'cors';
import { port } from "./utils/constant.js";
import notesController from './controllers/notesController.js';

export const app = express()
app.use(cors())
app.listen(port);

notesController(app);


// import mysql from 'mysql'
// import { host, user, password, database } from './utils/constant.js';

// const db = mysql.createConnection({
//     host,
//     user,
//     password,
//     database,
// })


