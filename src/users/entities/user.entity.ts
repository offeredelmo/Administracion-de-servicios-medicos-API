import { BedsPatient } from "src/beds_patients/entities/beds_patient.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    ADMIN = "admin",
    DOC = "doc"
}


@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id_user: string;

    @Column({
        type: 'text',
        nullable:false
    })
    name: string;

    @Column({
        type: 'text',
        unique: true,
        nullable:false
    })
    email: string;

    @Column({
        type: 'text',
        nullable:false
    })
    password: string;

    @Column({
        type:'varchar',
        length: 10,
        nullable: false
    })
    phone: string;

    @Column({
        type: "enum",
        enum: UserRole,
        nullable: false
    })
    rol: UserRole

    @Column({
        type: 'bool',
        default: false
    })
    confirmed: boolean

    @Column({
        type: 'bool',
        default: false
    })
    isActive: boolean

    @OneToMany(() => Task, (task) => task.stayHistory)
    task: Task

    @OneToMany(() => BedsPatient, (BedsPatient) => BedsPatient.user)
    bedsPatient: BedsPatient


}
