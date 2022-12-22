import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.ententy";
import { User } from "./user.ententy";

@Entity("schedules_users_properties")
export class Schedule {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ type: "date" })
    date: Date;

    @Column({ type: "time" })
    hour: Date;

    @ManyToOne(() => Properties, { eager: true, nullable: false })
    property: Properties

    @ManyToOne(() => User, { eager: true, nullable: false })
    user: User
}