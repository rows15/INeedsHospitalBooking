import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('admins')
export class Admin{
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
}