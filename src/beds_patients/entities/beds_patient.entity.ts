import { Bed } from "src/beds/entities/bed.entity";
import { Patient } from "src/patients/entities/patient.entity";
import { StayHistory } from "src/stay_history/entities/stay_history.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BedsPatient {
    @PrimaryGeneratedColumn('uuid')
    id_bed_patient: string

    @ManyToOne(() => Bed, (bed) => bed.bedsPatient)
    @JoinColumn({ name: "id_bed" })
    bed: string

    @ManyToOne(() => Patient, (patient) => patient.bedsPatient)
    @JoinColumn({ name: "id_patient" })
    patient: string

    @ManyToOne(() => User, (user) => user.bedsPatient)
    @JoinColumn({ name: "id_user" })
    user: string

    @ManyToMany(() => StayHistory)
    @JoinTable({name: "beds_patient_stay_history"})
    stayHistory: string
}
