import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm"
import {
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
} from "class-validator";

import { Patient } from "./Patient";

@Entity('guardians')
export class Guardian{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'varchar'})
    email: string
    @Column({type: 'text'})
    tel: string
    @Column({type: 'text'})
    name: string
    @Column({type: 'text'})
    password: string
    @Column({type: 'varchar'})
    rg: string



    @Column({type: 'text',nullable: true})
    @OneToMany(() => Patient, patient => patient.id)
    patients: Patient[]
    
    
}