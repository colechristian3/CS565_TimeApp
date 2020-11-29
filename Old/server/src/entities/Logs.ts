import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

export enum LOG_TYPE{
    ERROR = "ERROR",
    WARN = "WARN",
    INFO = "INFO",
    HTTP = "HTTP",
    VERBOSE = "VERBOSE",
    DEBUG = "DEBUG"
};

@Entity()
export default class Logs {

    @PrimaryGeneratedColumn({ type: "int" })
    public id!: number;

    @Column({ type: "enum", enum: LOG_TYPE })
    public type!: LOG_TYPE;

    @Column({ type: "json" })
    public json!: any;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    public timestamp!: string;

};
