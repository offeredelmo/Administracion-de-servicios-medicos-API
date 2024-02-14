import { UUID } from "crypto";
import { StayHistory } from "src/stay_history/entities/stay_history.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id_task: string

    @Column({
        type: 'text'
    })
    description: string

    @Column({
        type:"boolean"
    })
    finish: boolean

    @ManyToOne(() => StayHistory, (stayHistory) => stayHistory.task)
    @JoinColumn({ name: "id_stay_history" })
    stayHistory: string

    @ManyToOne(() => User, (user) => user.task)
    @JoinColumn({ name: "id_user_create" })
    user_create: string

    @ManyToOne(() => User, (user) => user.task)
    @JoinColumn({ name: "id_user_complete" })
    user_complete: string
}
