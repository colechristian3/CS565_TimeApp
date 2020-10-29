import express from 'express';
const app = express();
import 'module-alias/register'; //For file paths resolution with TypeScript
import {createConnection} from "typeorm"; //for TypeORM
import CONFIG from '@server/config.json'
const PORT = CONFIG.EXPRESS_SERVER_PORT;


app.get('/', async (req, res) => {
    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "GCP1990",
        database: "postgres"
    });
    res.send('Express + TypeScript Server and the DB is connected:'+ connection.isConnected);
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
