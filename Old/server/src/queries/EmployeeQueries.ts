import Queries from "@src/queries/Queries"
import Employee from "@src/entities/Employee";
import {getConnection} from "typeorm";
import WorkGroup from "@src/entities/WorkGroup";

export default class EmployeeQueries extends Queries {
    constructor() {
        super();
    }

     createEmployee(employee: Employee){
        return getConnection()
            .createQueryBuilder()
            .insert()
            .into(Employee)
            .values(employee)
            .execute()
            .then(() => this.logger.info(`Added employee ${employee.uuid}`))
            .catch((err) => this.logger.error(`Couldn't add employee ${employee.uuid}. Error: ${err}\nStack: ${err.stack}`));
    }
}
