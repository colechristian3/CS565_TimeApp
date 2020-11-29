import {Column, Entity, Generated, PrimaryColumn} from "typeorm";

import { Coordinates } from "@src/entities/Address";

@Entity()
export default class Password {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public employeeUuid?: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public jobUuid?: string;

    @Column({ type: "timestamp", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    public startTime?: string;

    @Column({ type: "point", nullable: true })
    public startCoord?: Coordinates;

    @Column({ type: "int", nullable: true })
    public startAccuracy?: number;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public startPicUrl?: string;

    @Column({ type: "timestamp", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    public stopTime?: string;

    @Column({ type: "point", nullable: true })
    public stopCoord?: Coordinates;

    @Column({ type: "int", nullable: true })
    public stopAccuracy?: number;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public stopPicUrl?: string;

    @Column({ type: "numeric", nullable: true })
    public totalTime?: string;

};