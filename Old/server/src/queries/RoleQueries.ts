import Queries from "@src/queries/Queries"
import {getConnection } from "typeorm";
import Role from "@src/entities/Role";
import Permission from "@src/entities/Permission";



export default class RoleQueries extends Queries {
    constructor() {
        super();
    }

    async createRole(role: Role){
        return getConnection()
            .createQueryBuilder()
            .insert()
            .into(Role)
            .values(role)
            .execute()
            .catch((err) => this.logger.error(`Couldn't add role ${role.uuid}. Error: ${err}\nStack: ${err.stack}`));
    }

    async getRoleByName(name: string) {
        return getConnection()
            .getRepository(Role)
            .createQueryBuilder("role")
            .where("role.name = :name", {name: name})
            .getOne()
            .catch((err) => this.logger.error(`Couldn't get role ${name}. Error: ${err}\nStack: ${err.stack}`));

    }

    async addPermissionToRole(roleUuid: string, permissionUuid: string){
        return getConnection()
            .createQueryBuilder()
            .relation(Role, "permissions")
            .of(roleUuid)
            .add(permissionUuid)
            .catch((err) => this.logger.error(`Couldn't add permission ${permissionUuid} into role ${roleUuid}. Error: ${err}\nStack: ${err.stack}`));
    }
}
