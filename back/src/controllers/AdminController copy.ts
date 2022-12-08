import { Request, Response } from "express";
import { title } from "process";
import { ILike, Like } from "typeorm";
import redis from "../lib/cache";
import { adminRepository } from "../repositories/AdminRepository";
import { guardianRepository } from "../repositories/GuardianRepository";
import { medicRepository } from "../repositories/MedicRepository";
import { patientRepository } from "../repositories/PatientRepository";

export class PatientController{

        
    async teste(req: Request, res: Response){
        const { role,email,tel,name,password,rg,crm,specialty,guardian_id } = req.body
        console.log(role)
        console.log(typeof(role))
        console.log(role === "admin")
        
        
        return res.status(201).json({message:"Teste"})
    }

    async teste2(req: Request, res: Response){
        const { role,email,tel,name,password,rg,crm,specialty,guardian_id } = req.body
        if (!role){
            return res.status(400).json({message:"Role needs to be informed"})
        }
        
        switch(role){
            case "admin":
                return res.json({message:"Adminzão em"})
            case "patient":
                return res.json({message:"Patient"})
            case "medic":
                return res.json({message:"medi Cu"})
            default:
                return res.status(404).json({message:"sei dessas role não ai"})
        }

        
    }

    async createUser(req: Request, res: Response){
        const { role,email,tel,name,password,rg,crm,specialty,guardian_id } = req.body
        
        if (!role){
            return res.status(400).json({message:"Role needs to be defined"})
        }
        switch(role){
            case "admin":
                
                try{
                    if (!email||!tel||!name||!password){
                        return res.status(400).json({message:"Missing Parameters"})
                    }
                    const newUser = adminRepository.create({email,tel,name,password})
                    console.log(newUser)
        
                    await adminRepository.save(newUser)
        
                    return res.status(201).json(newUser)
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({message:"Internal server error"})
        
                }


            case "patient":
                try{
                    const newUser = patientRepository.create({email,tel,name,password,rg,guardian_id})
                    console.log(newUser)
        
                    await patientRepository.save(newUser)
        
                    return res.status(201).json(newUser)
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({message:"Internal server error"})
        
                }


            case "medic":
                try{
                    if (!email||!tel||!name||!password||!crm||!specialty){
                        return res.status(400).json({message:"Missing Parameters"})
                    }
                    const newUser = medicRepository.create({email,tel,name,password,crm,specialty})
                    console.log(newUser)
        
                    await medicRepository.save(newUser)
        
                    return res.status(201).json(newUser)
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({message:"Internal server error"})
        
                }
            case "guardian":
                try{
                    if (!email||!tel||!name||!password||!rg){
                        return res.status(400).json({message:"Missing Parameters"})
                    }
                    const newUser = guardianRepository.create({email,tel,name,password,rg})
                    console.log(newUser)
        
                    await guardianRepository.save(newUser)
        
                    return res.status(201).json(newUser)
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({message:"Internal server error"})
        
                }
            default:
                return res.status(404).json({message:"Role not found"})
        
    } 

    

}}