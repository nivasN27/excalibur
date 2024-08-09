import notesController from "./controllers/notesController.js";
import cors from 'cors';
import { port } from "./utils/constant.js";

console.log(port, "---------------->>>>>>>>>>>>>>>>");

notesController.listen(port)
notesController.use(cors())


