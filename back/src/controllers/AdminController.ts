import * as EmailValidator from 'email-validator';
import { Request, Response } from "express";
import { title } from "process";
import { ILike, Like } from "typeorm";
import redis from "../lib/cache";
import { adminRepository } from "../repositories/AdminRepository";
import { guardianRepository } from "../repositories/GuardianRepository";
import { medicRepository } from "../repositories/MedicRepository";
import { patientRepository } from "../repositories/PatientRepository";

export class AdminController{

        
    async teste(req: Request, res: Response){
        const { role,email,tel,name,password,rg,crm,specialty,id,guardian_id } = req.body
        console.log(role)
        console.log(typeof(role))
        console.log(role === "admin")
        
        var patientToEdit = await patientRepository.findOne({where: {id:id}})
        /* patientRepository.update({id},req.body) */
        /* patientRepository.update({id},{
            ...(name && {name:name}),
            ...(email && {email:email}),
            ...(tel && {tel:tel}),
            ...(name && {name:name}),        
            ...(password && {password:password}),
            ...(rg && {rg:rg}),
            ...(guardian_id && {guardian_id:()=>guardian_id})

        }) */
        
        /* patientRepository.update({id},{guardian_id:()=>guardian_id}) */

        console.log(patientToEdit)
        console.log("testei")
        return res.status(201).json(patientToEdit)
    }

    async editUser(req: Request, res: Response){
        const { role,id,email,tel,name,password,rg,crm,specialty,guardian_id } = req.body
        
        if (!role){
            return res.status(400).json({message:"Role needs to be defined"})
        }
        if (!id){
            return res.status(400).json({message:"Id needs to be defined"})
        }
        switch(role){
            
            case "medic":
                try{
                    const findEmail = await medicRepository.findOne({
                        where:{
                        email : email
                    }})
                    if (email){
                        if(!EmailValidator.validate(email)){
                            return res.status(409).json({message:"Not a Valid Email"})
                        }
                        if(findEmail){
                            return res.status(409).json({message:"Email Already Exists"})
                        }
                    }
                    medicRepository.update({id},{
                        ...(name && {name:name}),
                        ...(email && {email:email}),
                        ...(tel && {tel:tel}),
                                
                        ...(password && {password:password}),
                        ...(crm && {crm:crm}),
                        ...(specialty && {specialty:specialty})

                     })
                    
                     return res.status(201).json({message:"Medic Edited"})
                    
                    
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({message:"Internal server error"})
        
                }
            
            default:
                return res.status(404).json({message:"Role not found"})
    
    
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
                    if(!EmailValidator.validate(email)){
                        return res.status(409).json({message:"Not a Valid Email"})
                    }
                    const findEmail = await adminRepository.findOne({
                        where:{
                        email : email
                    }})
                    if(findEmail){
                        return res.status(409).json({message:"Email Already Exists"})
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
                    if (email){
                    if(!EmailValidator.validate(email)){
                        return res.status(409).json({message:"Not a Valid Email"})
                    }
                    const findEmail = await patientRepository.findOne({
                        where:{
                        email : email
                    }})
                    if(findEmail){
                        return res.status(409).json({message:"Email Already Exists"})
                    }}
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
                    if(!EmailValidator.validate(email)){
                        return res.status(409).json({message:"Not a Valid Email"})
                    }
                    const findEmail = await medicRepository.findOne({
                        where:{
                        email : email
                    }})
                    if(findEmail){
                        return res.status(409).json({message:"Email Already Exists"})
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
                    if(!EmailValidator.validate(email)){
                        return res.status(409).json({message:"Not a Valid Email"})
                    }
                    const findEmail = await adminRepository.findOne({
                        where:{
                        email : email
                    }})
                    if(findEmail){
                        return res.status(409).json({message:"Email Already Exists"})
                    }
                    const findRg = await guardianRepository.findOne({
                        where:{
                        rg : rg
                    }})
                    if(findRg){
                        return res.status(409).json({message:"Rg Already Exists"})
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

    

}async teste2(req: Request, res: Response){
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

    
}}