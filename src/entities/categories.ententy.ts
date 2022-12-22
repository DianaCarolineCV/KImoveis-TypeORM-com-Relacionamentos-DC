import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Properties } from "./properties.ententy";

@Entity("categories")

export class Categories {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Properties, Propertie => Propertie.category)
    properties: Properties[]

}