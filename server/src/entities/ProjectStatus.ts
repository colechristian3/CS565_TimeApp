import {Entity, Column, PrimaryColumn, Generated} from "typeorm";

@Entity()
export default class ProjectStatus {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Column({ type: "varchar", width: 200, nullable: true })
    public name!: string;

};