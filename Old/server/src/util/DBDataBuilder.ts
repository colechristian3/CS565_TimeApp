import * as _ from 'lodash';
import CONFIG from '@src/config.json'
import LoggerService from '@src/util/LoggerService';
import Permission from "@src/entities/Permission";
import PermissionQueries from '@src/queries/PermissionQueries'
import RoleQueries from '@src/queries/RoleQueries'
import EmployeeQueries from "@src/queries/EmployeeQueries";
import Role from "@src/entities/Role";
import Employee from "@src/entities/Employee";
import Password from "@src/entities/Password";
import Utils from "@src/util/Utils";

const utils = new Utils();
const permissionQueries = new PermissionQueries();
const employeeQueries = new EmployeeQueries()
const roleQueries = new RoleQueries();

const logger = new LoggerService();

export default class DBDataBuilder {

    async addDefaultPermissions(){
        logger.info("addDefaultPermissions() is being ran");
        let permissionList = CONFIG.DEFAULT_PERMISSION;
        _.forEach(permissionList, async (permission) => {

            let permissionObj = new Permission();
            permissionObj.name = permission.NAME;
            permissionObj.uuid = permission.UUID;

            await permissionQueries.createPermission(permissionObj)
        });
    }

    async addDefaultRoles(){
      logger.info("addDefaultRole() is being ran");
      let roleList = CONFIG.DEFAULT_ROLE;
      _.forEach(roleList, async (role) => {

          let roleObj = new Role();
          roleObj.name = role.NAME;
          roleObj.uuid = role.UUID;

          await roleQueries.createRole(roleObj);
      });
    }

    async addDefaultPermissionsToRoles() {
        logger.info("addDefaultPermissionsToRoles() is being ran");
        let adminPermissionList = CONFIG.DEFAULT_ROLE_PERMISSIONS.ADMIN;
        let basicPermissionList = CONFIG.DEFAULT_ROLE_PERMISSIONS.BASIC;
        let serverPermissionList = CONFIG.DEFAULT_ROLE_PERMISSIONS.SERVER;

        roleQueries.getRoleByName("ADMIN")
            .then((role) => {
                _.forEach(adminPermissionList, async (permission) => {
                    await roleQueries.addPermissionToRole(role.uuid, permission.UUID);
                })
            })

        roleQueries.getRoleByName("BASIC")
            .then((role) => {
                _.forEach(basicPermissionList, async (permission) => {
                    await roleQueries.addPermissionToRole(role.uuid, permission.UUID);
                })
            })

        roleQueries.getRoleByName("SERVER")
            .then((role) => {
                _.forEach(serverPermissionList, async (permission) => {
                    await roleQueries.addPermissionToRole(role.uuid, permission.UUID);
                })
            })
    }

    async addInitAdminUser(){
        logger.info("addInitAdminUser() is being ran");
        let adminInfo = CONFIG.ADMIN_USER;

        let password =  new Password();
        password.salt = await utils.createSalt();
        password.hash = await utils.createHashedPasswordWithSalt(password.salt, adminInfo.PASSWORD);

        let admin = new Employee();
        admin.firstName = adminInfo.NAME;
        admin.username = adminInfo.USERNAME;
        admin.password = password;

        await employeeQueries.createEmployee(admin);

    }

}