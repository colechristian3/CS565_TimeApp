import CONFIG from '@src/config.json';
import LoggerService from '@src/util/LoggerService';
const logger = new LoggerService();
import {Connection, createConnection} from "typeorm";

import Logs from "@src/entities/Logs";
import Employee from "@src/entities/Employee";
import Address from "@src/entities/Address";
import WorkGroup from "@src/entities/WorkGroup";
import Permission from "@src/entities/Permission";
import EmployeeNote from "@src/entities/EmployeeNote";
import Auth from "@src/entities/Auth";
import Session from "@src/entities/Session";
import SessionHistory from "@src/entities/SessionHistory";
import Password from "@src/entities/Password";
import TimesheetRecord from "@src/entities/TimesheetRecord";
import Customer from "@src/entities/Customer";
import CustomerNote from "@src/entities/CustomerNote";
import Project from "@src/entities/Project";
import ProjectStatus from "@src/entities/ProjectStatus";
import ProjectTag from "@src/entities/ProjectTag";
import ProjectNote from "@src/entities/ProjectNote";
import Role from "@src/entities/Role";


export default class DBConnector {
    constructor() {
    }

    async createConnection(){
        return createConnection({
            name: 'default',
            type: "postgres",
            host: CONFIG.DB.HOST,
            port: CONFIG.DB.PORT,
            username: CONFIG.DB.USERNAME,
            password: CONFIG.DB.PASSWORD,
            database: CONFIG.DB.DATABASE,
            entities: [
                Logs,
                Employee,
                Address,
                WorkGroup,
                Permission,
                EmployeeNote,
                Auth,
                Session,
                SessionHistory,
                Password,
                TimesheetRecord,
                Customer,
                CustomerNote,
                Project,
                ProjectStatus,
                ProjectTag,
                ProjectNote,
                Role
            ],
            synchronize: true,
        });
    }
}