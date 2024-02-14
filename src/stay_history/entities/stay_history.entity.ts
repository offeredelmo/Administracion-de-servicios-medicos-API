import { Patient } from "src/patients/entities/patient.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum TypesAgress{
    PRINCIPAL = 'opccion'
} 

@Entity()
export class StayHistory {
    @PrimaryGeneratedColumn('uuid')
    id_stay_histori: string

    @Column({
        type: 'date',
        nullable: false,
    })
    admission_date: Date

    @Column({
        type: 'enum',
        enum: TypesAgress,
    })
    agress: string

    @Column({
        type: 'date',
        nullable: false,
    })
    discharge_date: Date

    @ManyToOne(() => Patient, (patient) => patient.stayHistory)
    @JoinColumn({ name: "id_patient" })
    patient: string


    @OneToMany(() => Task, (task) => task.user_create)
    task: Task
}
