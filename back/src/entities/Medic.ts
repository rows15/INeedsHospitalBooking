import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('medics')
export class Medic{
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
    crm: string
    @Column({type: 'text'})
    specialty: string
}