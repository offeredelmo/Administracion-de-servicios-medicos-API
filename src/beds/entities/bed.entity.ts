import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    confirmed: boolean

}
