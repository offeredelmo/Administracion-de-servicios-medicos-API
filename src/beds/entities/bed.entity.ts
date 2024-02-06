import { Service } from "src/services/entities/service.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bed {
    @PrimaryGeneratedColumn('uuid')
    id_bed: string;

    @Column({
        type:'float',
        nullable: false
    })
    number_bed: number

    @Column({
        type: 'boolean',
        select: false,
        default: false
    })
    avalible: boolean

    @ManyToOne(() => Service, (service) => service.bed)
    @JoinColumn({ name: "serviceId" })
    service: Service
}
