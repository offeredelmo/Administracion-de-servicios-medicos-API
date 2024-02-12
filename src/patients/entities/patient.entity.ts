import { BedsPatient } from "src/beds_patients/entities/beds_patient.entity";
import { StayHistory } from "src/stay_history/entities/stay_history.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum PatientSex{
    MASCULINO = "masculino",
    FEMENINO = "femenino",
    OTRO = "otro"

}

@Entity()
export class Patient {
    @PrimaryGeneratedColumn('uuid')
    id_patient: string;

    @Column({
        type: "text",
        nullable: false
    })
    name: string

    @Column({
        type: "float",
        nullable: false
    })
    age: number

    @Column({
        type: "enum",
        enum: PatientSex,
        nullable: false
    })
    sex: string

    @Column({
        type: "text",
        nullable: false
    })
    birthdate: string
    
    @Column({
        type: "text",
        nullable: false
    })
    curp: string

    @Column({
        type: "text",
        nullable: false
    })
    oficio: string

    @OneToMany(() => StayHistory, (stayHistory) => stayHistory.patient)
    stayHistory: StayHistory

    @OneToMany(() => BedsPatient, (BedsPatient) => BedsPatient.patient)
    bedsPatient: BedsPatient

}
