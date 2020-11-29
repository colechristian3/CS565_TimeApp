import {Entity, Column, PrimaryColumn, Generated} from "typeorm";

export class Coordinates{
    public lat: number;
    public long: number;
    constructor() {
        this.lat = 0;
        this.long = 0;
    }
}


@Entity()
export default class Address {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    public uuid!: string;

    @Column({ type: "varchar", width: 300, nullable: true })
    public streetOne?: string;

    @Column({ type: "varchar", width: 300, nullable: true })
    public streetTwo?: string;

    @Column({ type: "varchar", width: 300, nullable: true })
    public city?: string;

    @Column({ type: "varchar", width: 300, nullable: true })
    public state?: string;

    @Column({ type: "varchar", width: 100, nullable: true })
    public zip?: string;

    @Column({ type: "varchar",  width: 300, nullable: true })
    public county?: string;

    @Column({ type: "varchar",  width: 300, nullable: true })
    public country?: string;

    @Column({ type: "varchar",  width: 2083, nullable: true })
    public googleMapID?: string;

    @Column({ type: "point", nullable: true })
    public coordinates?: Coordinates;

};
