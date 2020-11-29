import Queries from "@src/queries/Queries"
import {getConnection} from "typeorm";
import Permission from "@src/entities/Permission";


export default class PermissionQueries extends Queries {
    constructor() {
        super();
    }

    async createPermission(permission: Permission){
        return getConnection()
            .createQueryBuilder()
            .insert()
            .into(Permission)
            .values(permission)
            .execute()
            .catch((err) => this.logger.error(`Couldn't add permission ${permission.uuid}. Error: ${err}\nStack: ${err.stack}`));
    }
}
