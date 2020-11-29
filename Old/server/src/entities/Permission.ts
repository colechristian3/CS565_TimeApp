import {Entity, Column, Generated, PrimaryColumn} from "typeorm";

@Entity()
export default class Permission {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Column({ type: "varchar", width: 400, unique: true })
    public name!: string;

};
