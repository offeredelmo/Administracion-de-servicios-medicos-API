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
    bed: Bed

    @ManyToOne(() => Patient, (patient) => patient.bedsPatient)
    @JoinColumn({ name: "id_patient" })
    patient: Patient

    @ManyToOne(() => User, (user) => user.bedsPatient)
    @JoinColumn({ name: "id_user" })
    user: User

    @ManyToMany(() => StayHistory)
    @JoinTable({name: "beds_patient_stay_history"})
    stayHistory: StayHistory
}
