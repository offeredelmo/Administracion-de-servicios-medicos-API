import { BedsPatient } from "src/beds_patients/entities/beds_patient.entity";
import { Service } from "src/services/entities/service.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bed {
    @PrimaryGeneratedColumn('uuid')
    id_bed: string;

    @Column({
        type:'float',
        nullable: false,
        unique: true
    })
    number_bed: number

    @Column({
        type: 'boolean',
        default: false
    })
    avalible: boolean

    @ManyToOne(() => Service, (service) => service.bed)
    @JoinColumn({ name: "service_id" })
    service: Service

    @OneToMany(() => BedsPatient, bedsPatient => bedsPatient.bed)
    bedsPatient: BedsPatient;  
}
