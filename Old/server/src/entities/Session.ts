import {Entity, Column, PrimaryColumn, Generated} from "typeorm";

@Entity()
export default class Session {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public authToken?: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public sessionIP?: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public expiration?: string;

    @Column({ type: "varchar", width: 2083, nullable: true })
    public lastActive?: string;

    @Column({ type: "json", nullable: true })
    public jwtToken?: string;

};
