import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {
    @PrimaryGeneratedColumn('uuid')
    id_service: string

    @Column({
        type: 'text',
        unique: true,
    })
    name:string
}
