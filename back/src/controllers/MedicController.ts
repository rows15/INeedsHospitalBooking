import { Request, Response } from "express";
import { title } from "process";
import { ILike, Like } from "typeorm";
import redis from "../lib/cache";
import { adminRepository } from "../repositories/AdminRepository";
import { guardianRepository } from "../repositories/GuardianRepository";
import { medicRepository } from "../repositories/MedicRepository";


export class MedicController{

        
    async listMedics(req: Request, res: Response){
        
        
        
        try{
        const {specialty} = req.params
        console.log(specialty)
        if(!specialty){
            const allMedics = await medicRepository.find({select:{
            id: true,
            email: true,
            tel: true,
            name: true,
            password: true,
            crm: true,
            specialty: true
            }})
            return res.status(200).json(allMedics)
        }   const someMedics = await medicRepository.find({select:{
            id: true,
            email: true,
            tel: true,
            name: true,
            password: true,
            crm: true,
            specialty: true}, where:{specialty: ILike(`%${specialty}%`)}})
            return res.status(200).json(someMedics)
        
    }catch{
        return res.status(500).json({message:"Internal server error"})}
    }








    

}