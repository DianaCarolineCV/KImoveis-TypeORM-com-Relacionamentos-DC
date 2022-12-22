import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./adress.ententy"
import { Categories } from "./categories.ententy";
import { Schedule } from "./schecules.ententy";

@Entity("properties")
export class Properties {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ default: false })
    sold: boolean;

    @Column("decimal", { precision: 12, scale: 2 })
    value: number;

    @Column({ type: "integer" })
    size: number;

    @CreateDateColumn({ type: "date" })
    createdAt: Date;

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date;

    @OneToOne(() => Address, { eager: true, nullable: false })
    @JoinColumn()
    address: Address

    @ManyToOne(() => Categories, { eager: true, nullable: false })
    category: Categories

    @OneToMany(() => Schedule, SchedulesUserProperties => SchedulesUserProperties.property)
    schedules: Schedule[]

}
