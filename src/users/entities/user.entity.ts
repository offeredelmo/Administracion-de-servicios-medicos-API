import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
        type: 'boolean',
        select: false,
        default: false
    })
    confirmed: boolean

}
