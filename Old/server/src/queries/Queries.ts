import LoggerService from '@src/util/LoggerService';
import DBConnector from "@src/util/DBConnector";


export default class Queries {
    protected logger: any;

    constructor() {
        this.logger = new LoggerService();
    }
}