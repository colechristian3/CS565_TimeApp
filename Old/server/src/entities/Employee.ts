import {Entity, Column, Generated, JoinColumn, OneToOne, PrimaryColumn, ManyToMany, JoinTable} from "typeorm";
import {LOG_TYPE} from "@src/entities/Logs";
import Address from '@src/entities/Address';
import WorkGroup from "@src/entities/WorkGroup";
import Role from "@src/entities/Role";
import Auth from "@src/entities/Auth";
import Session from "@src/entities/Session";
import SessionHistory from "@src/entities/SessionHistory";
import Password from "@src/entities/Password";

export enum PAY_TYPE{
    SALARY = "SALARY",
    HOURLY = "HOURLY",
    CONTRACTOR = "CONTRACTOR"
};

export enum EMPLOYEE_STATUS{
    ACTIVE = "ACTIVE",
    LEAVE = "LEAVE",
    TERMINATED = "TERMINATED",
};

@Entity()
export default class Employee {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Generated()
    @Column({ type: "int", unique: true })
    public id!: number;

    @Column({ type: "varchar", width: 200, nullable: true })
    public firstName!: string;

    @Column({ type: "varchar", width: 200, nullable: true })
    public middleName?: string;

    @Column({ type: "varchar", width: 200, nullable: true })
    public lastName?: string;

    @Column({ type: "varchar", width: 600, nullable: true  })
    public email?: string;

    @Column({ type: "varchar", width: 600, nullable: true  })
    public username?: string;

    @Column({ type: "varchar", width: 50, nullable: true })
    public cell?: string;

    @Column({ type: "enum",  enum: LOG_TYPE, nullable: true })
    public payType?: PAY_TYPE;

    @Column({ type: "money", nullable: true })
    public payRate?: string;

    @Column({ type: "enum",  enum: EMPLOYEE_STATUS, nullable: true })
    public status?: EMPLOYEE_STATUS;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public picture?: string;

    @Column({ type: "date", nullable: true })
    public startDate?: string;

    @Column({ type: "date", nullable: true })
    public endDate?: string;

    @Column({ type: "date", nullable: true  })
    public rehireDate?: string;

    @Column({ type: "int", nullable: true, default: () => "0"  })
    public loginAttempts?: number;

    @Column({ type: "bool", nullable: true, default: () => false  })
    public isAccountLocked?: boolean;

    @Column({ type: "bool", nullable: true, default: () => false  })
    public isClockedIn?: boolean;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public currentTimesheetRecordUuid?: string;

    @OneToOne(() => Address, {cascade: true, nullable: true})
    @JoinColumn()
    public address?: Address;

    @OneToOne(() => Password, {cascade: true, nullable: true})
    @JoinColumn()
    public password?: Password;

    @OneToOne(() => Session, {cascade: true, nullable: true})
    @JoinColumn()
    public currentSession?: Session;

    @OneToOne(() => Auth, {cascade: true, nullable: true})
    @JoinColumn()
    public auth?: Auth;

    @ManyToMany(() => SessionHistory, {cascade: true, nullable: true})
    @JoinTable()
    public sessionHistory?: SessionHistory[];

    @ManyToMany(() => WorkGroup, {cascade: true, nullable: true})
    @JoinTable()
    public workGroups?: WorkGroup[];

    @ManyToMany(() => Role, {cascade: true, nullable: true})
    @JoinTable()
    public role?: Role[];

};