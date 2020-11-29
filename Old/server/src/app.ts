import express from 'express';
const app = express();
import 'module-alias/register'; //For file paths resolution with TypeScript
import CONFIG from '@src/config.json'
const PORT = CONFIG.EXPRESS_SERVER_PORT;
import LoggerService from '@src/util/LoggerService';
const logger = new LoggerService();
import DBConnector from "@src/util/DBConnector";
import * as _ from 'lodash';
import DBDataBuilder from "@src/util/DBDataBuilder";

const dbDataBuilder = new DBDataBuilder();

import {Connection, getConnection} from 'typeorm';

const { auth } = require('express-openid-connect');



app.listen(PORT, async () => {
    logger.info(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);

    //********* Make Connection to the DB ***********
    const connection: Connection = await new DBConnector().createConnection();

    //********* Add Default Permissions ***********
    // await dbDataBuilder.addDefaultPermissions();

    //********* Add Default Permissions ***********
    // await dbDataBuilder.addDefaultRoles();

    //********* Add Default Permissions To Roles ***********
    //  await dbDataBuilder.addDefaultPermissionsToRoles();

    //********* Add Default Admin User***********
    //  await dbDataBuilder.addInitAdminUser();


});


app.get('/', async (req, res) => {
    res.send('Express + TypeScript Server and the DB is connected:' );
});



