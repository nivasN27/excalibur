import mysql from 'mysql'
import { host, user, password, db } from './constant.js';


const dataBase = mysql.createConnection({
        host: host,
        user : user,
        password: password,
        database: db,
    })

export default dataBase;