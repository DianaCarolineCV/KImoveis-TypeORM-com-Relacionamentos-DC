import { hashSync, getRounds } from "bcryptjs"
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    OneToMany
} from
    "typeorm"

import { Schedule } from "./schecules.ententy";
@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ length: 50 })
    name: string

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 120 })
    password: string

    @Column()
    isAdm: boolean;

    @CreateDateColumn({ type: "date" })
    createdAt: Date

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => Schedule, SchedulesUserProperties => SchedulesUserProperties.user)
    schedule: Schedule[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        const isEncrypted = getRounds(this.password)
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10)
        }
    }
}



