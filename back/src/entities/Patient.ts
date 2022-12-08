import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Guardian } from "./Guardian";
import { Booking } from "./Booking";

@Entity('patients')
export class Patient{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'text', nullable: true})
    email: string
    @Column({type: 'text', nullable: true})
    tel: string
    @Column({type: 'text', nullable: true})
    name: string
    @Column({type: 'text', nullable: true})
    password: string
    @Column({type: 'text', nullable: true})
    rg: string
    
    @Column({type: 'text',nullable: true})
    @OneToMany(() => Booking, booking => booking.id)
    bookings: Booking[]

    @ManyToOne(() =>Guardian, guardian => guardian.id)
    @JoinColumn({name: "guardian_id"})
    guardian_id: Guardian
}