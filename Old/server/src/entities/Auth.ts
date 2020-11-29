import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export default class Auth {

    @PrimaryColumn({ type: "varchar", width: 2083 })
    public id?: string;

    @Column({ type: "json"  })
    public json?: any;

};
