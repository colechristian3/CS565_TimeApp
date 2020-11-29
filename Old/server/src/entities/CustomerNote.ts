import {Entity, Column, PrimaryColumn, Generated} from "typeorm";

@Entity()
export default class CustomerNote {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Column({ type: "uuid", nullable: false })
    public customerUuid!: string;

    @Column({ type: "uuid", nullable: false })
    public createdBy!: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    public timestamp!: string;

    @Column({ type: "text", nullable: false })
    public note!: string;

};