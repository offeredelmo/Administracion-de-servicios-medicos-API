import { Bed } from "src/beds/entities/bed.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {
    @PrimaryGeneratedColumn('uuid')
    id_service: string

    @Column({
        type: 'text',
        unique: true,
    })
    name:string

    @OneToMany(() => Bed, (bed) => bed.service)
    bed: Bed
}
