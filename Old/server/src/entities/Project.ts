import {Entity, Column, Generated, JoinColumn, OneToOne, PrimaryColumn, ManyToMany, JoinTable} from "typeorm";
import Address from '@src/entities/Address';
import ProjectTag from '@src/entities/ProjectTag';


@Entity()
export default class Customer {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public customerUuid!: string;

    @Generated()
    @Column({ type: "int", unique: true })
    public id!: number;

    @Column({ type: "varchar", width: 200, nullable: true })
    public jobName!: string;

    @Column({ type: "text", width: 5000, nullable: true })
    public notes?: string;

    @Column({ type: "int", nullable: true })
    public estimateNum?: number;

    @Column({ type: "int", nullable: true })
    public invoiceNum?: number;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public fileURL?: string;

    @OneToOne(() => Address, {cascade: true, nullable: true})
    @JoinColumn()
    public address?: Address;

    @Column({ type: "date", nullable: true })
    public estimatedStartDate?: string;

    @Column({ type: "date", nullable: true })
    public estimatedCompleteDate?: string;

    @Column({ type: "int", nullable: true })
    public estimatedEmployees?: number;

    @Column({ type: "date", nullable: true })
    public actualStartDate?: string;

    @Column({ type: "date", nullable: true })
    public actualCompleteDate?: string;

    @Column({ type: "int", nullable: true })
    public actualEmployees?: number;

    @Column({ type: "uuid", nullable: true })
    public projectStatusUuid?: string;

    @ManyToMany(() => ProjectTag)
    @JoinTable()
    public projectTags?: ProjectTag[];

};
