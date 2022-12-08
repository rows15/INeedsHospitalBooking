import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Guardian } from "./Guardian";
import { Medic } from "./Medic";
import { Patient } from "./Patient";

@Entity('bookings')
export class Booking{
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: 'timestamp' }) 
    initialDate: Date;
    @Column({ type: 'timestamp' }) 
    finalDate: Date;

    @ManyToOne(() =>Patient, patient => patient.id)
    @JoinColumn({name: "patient_id"})
    patient_id: Patient
    
    @ManyToOne(() =>Medic, medic => medic.id)
    @JoinColumn({name: "medic_id"})
    medic_id: Medic
    
}