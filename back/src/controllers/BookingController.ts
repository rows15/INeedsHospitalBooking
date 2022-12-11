import * as EmailValidator from 'email-validator';
import { Request, Response } from "express";
import { title } from "process";
import { ILike, Like, MoreThan } from "typeorm";
import redis from "../lib/cache";
import { adminRepository } from "../repositories/AdminRepository";
import { bookingRepository } from '../repositories/BookingRepository';
import { guardianRepository } from "../repositories/GuardianRepository";
import { medicRepository } from "../repositories/MedicRepository";
import { patientRepository } from "../repositories/PatientRepository";
import { zonedTimeToUtc, utcToZonedTime,format} from 'date-fns-tz';

export class BookingController{
     addHours(numOfHours:number, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
      
        return date;
      }
        
    async createResevation(req: Request, res: Response){
        var { role,initialDate,patient_id,medic_id} = req.body
        
        initialDate = new Date(initialDate)
        var finalDate = new Date(initialDate)
        finalDate.setHours(finalDate.getHours()+1)
        console.log(initialDate)
        console.log(finalDate)
        
        
        

        try {
            
            
            
            const newBook = bookingRepository.create({initialDate,finalDate,patient_id,medic_id})
            console.log("Reservation confirmed")
            await bookingRepository.save(newBook)
            return res.status(201).json(newBook)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"Internal server error"})
        }
        
    }
    

    async listAllBookings(req: Request, res: Response){
        /* const { role,email,tel,name,password,rg,crm,specialty,guardian_id } = req.body */
        /* console.log(role)
        console.log(typeof(role))
        console.log(role === "admin") */
        try{
        
            const allMedics = await bookingRepository.find({select:{
            id: true,
            initialDate: true,
            finalDate: true},relations:["patient_id","medic_id"]
            
            })
            return res.status(200).json(allMedics)
        }
        catch(error){
            console.log(error)
        return res.status(500).json({message:"Internal server error"})}
    }
    async listBookingsByPatient(req: Request, res: Response){
        /* const { role,email,tel,name,password,rg,crm,specialty,guardian_id } = req.body */
        /* console.log(role)
        console.log(typeof(role))
        console.log(role === "admin") */
        
        try{
            const {id} = req.params
            const allMedics = await bookingRepository.find({where:{ patient_id:{id:Number(id)}
            },select:{
                id: true,
                initialDate: true,
                finalDate: true},relations:["patient_id","medic_id"]
            
            })
            return res.status(200).json(allMedics)
        }
        catch(error){
            console.log(error)
        return res.status(500).json({message:"Internal server error"})}
    }
    async listBookingsByMedic(req: Request, res: Response){
        /* const { role,email,tel,name,password,rg,crm,specialty,guardian_id } = req.body */
        /* console.log(role)
        console.log(typeof(role))
        console.log(role === "admin") */
        
        try{
            const {id} = req.params
            const allMedics = await bookingRepository.find({where:{ medic_id:{id:Number(id)}
            },select:{
                id: true,
                initialDate: true,
                finalDate: true},relations:["patient_id","medic_id"]
                
            })
            
            return res.status(200).json(allMedics)
        }
        catch(error){
            console.log(error)
        return res.status(500).json({message:"Internal server error"})}
    }
    async listBookingsByDate(req: Request, res: Response){
        
        
        
        try{
            const {id} = req.params
            console.log(id)
            const date = new Date(id)
            console.log(date)
            const allMedics = await bookingRepository.find({where:{initialDate: date}
            ,select:{
                id: true,
                initialDate: true,
                finalDate: true},relations:["patient_id","medic_id"]
            
            })
            return res.status(200).json(allMedics)
        }
        catch(error){
            console.log(error)
        return res.status(500).json({message:"Internal server error"})}
    }
    

    async deleteBooking(req: Request, res: Response){
        var {id} = req.params
        var numberId = Number(id)
        
        if (!id){
            return res.status(400).json({message:"Id needs to be defined"})
        }
        
                try{
                    const findBooking = await bookingRepository.findOne({
                        where:{
                        id : numberId
                    }})
                    if (!findBooking){
                        
                            return res.status(404).json({message:"Booking Not Found"})
                        }
                        
                    
                    bookingRepository.remove(findBooking)
                    
                    return res.status(204)
                    
                    
        
                } catch(error){
                    console.log(error)
                    return res.status(500).json({message:"Internal server error"})
                }
    
    }

}
