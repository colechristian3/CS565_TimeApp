import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Logs {

    @PrimaryGeneratedColumn({ type: "uuid" })
    id: number | undefined;

    @Column({ type: "varchar", width: 10})
    level: string | undefined;

    @Column({ type: "json" })
    json: string | undefined;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    time: string | undefined;

}