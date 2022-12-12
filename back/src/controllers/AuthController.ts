import { Request, Response } from "express";

import { adminRepository } from "../repositories/AdminRepository";
import { guardianRepository } from "../repositories/GuardianRepository";
import { medicRepository } from "../repositories/MedicRepository";
import { patientRepository } from "../repositories/PatientRepository";

/* import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; */

//Não deu tempo de implementr o Jwt certo, vou fazer um login simples com check no db pelo email+pass e retornar true ou false
export class AuthController{


    


    async auth(req: Request, res: Response){
        
        const {role, email, password} = req.body
        if (!email || !password || !role){
            console.log(req.body)
            return res.json({message:"Missing user, role and (or) password"})
        }
        

        switch(role){
            case "admin":
                
                try{
                    
                    const user = await adminRepository.findOne({where: {email}});

                    if (!user){
                        return res.status(401).json({authorization:false})
                    }
                    const isValidPassword = (user.password === password)        /* await bcrypt.compare(password, user.password) */
                    console.log(isValidPassword)
                    if (!isValidPassword){
                        return res.status(401).json({authorization:false})
                    }
                    return res.status(200).json({authorization:true,id:user.id,name:user.name})
                    /* const token = jwt.sign({id: user.id},'secret1',{expiresIn: '1d'})

                    user.password = "_"

                    return res.json({
                        user,
                        token
                    }) */
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({authorization:false,message:"Internal server error"})
        
                }


            case "patient":
                try{
                    
                    const user = await patientRepository.findOne({where: {email}});

                    if (!user){
                        return res.status(401).json({authorization:false})
                    }
                    const isValidPassword = (user.password === password)        /* await bcrypt.compare(password, user.password) */
                    console.log(isValidPassword)
                    if (!isValidPassword){
                        return res.status(401).json({authorization:false})
                    }
                    return res.status(200).json({authorization:true,id:user.id,name:user.name})
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({authorization:false,message:"Internal server error"})
        
                }


            case "medic":
                try{
                    
                    const user = await medicRepository.findOne({where: {email}});

                    if (!user){
                        return res.status(401).json({authorization:false})
                    }
                    const isValidPassword = (user.password === password)        /* await bcrypt.compare(password, user.password) */
                    console.log(isValidPassword)
                    if (!isValidPassword){
                        return res.status(401).json({authorization:false})
                    }
                    return res.status(200).json({authorization:true,id:user.id,name:user.name})
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({authorization:false,message:"Internal server error"})
        
                }
            case "guardian":
                try{
                    const user = await guardianRepository.findOne({where: {email}});

                    if (!user){
                        return res.status(401).json({authorization:false})
                    }
                    const isValidPassword = (user.password === password)        /* await bcrypt.compare(password, user.password) */
                    console.log(isValidPassword)
                    if (!isValidPassword){
                        return res.status(401).json({authorization:false})
                    }
                    return res.status(200).json({authorization:true,id:user.id,name:user.name})
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({authorization:false,message:"Internal server error"})
        
                }
            default:
                return res.status(404).json({authorization:false,message:"Role not found"})



}}}