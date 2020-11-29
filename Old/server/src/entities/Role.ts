import {Entity, Column, Generated, PrimaryColumn, ManyToMany, JoinTable} from "typeorm";
import Permission from "@src/entities/Permission";

@Entity()
export default class Role {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Column({ type: "varchar", width: 400, unique: true })
    public name!: string;

    @ManyToMany(() => Permission, {cascade: true, nullable: true})
    @JoinTable()
    public permissions?: Permission[];

};