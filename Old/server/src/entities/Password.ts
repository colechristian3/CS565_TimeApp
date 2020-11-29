import {Entity, Column, PrimaryColumn, Generated} from "typeorm";

@Entity()
export default class Password {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public salt?: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public hash?: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public hashFunction?: string;

    @Column({ type: "int", nullable: true })
    public hashIterations?: number;

    @Column({ type: "int", nullable: true })
    public hashKeylen?: number;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public hashDigest?: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    public timestamp!: string;

};