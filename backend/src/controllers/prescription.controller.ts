import { Request, Response } from "express";
import { appointments, prescriptions } from "src/data/mockData";

export const generatePrescription = async(req: Request, res: Response) => {
    try{
        const {id, madicineName, instruction, dosage} = req.body
        const appointment = appointments.find((item) => item.id === id)
        if(!appointment){
            res.status(404).json({error:"Appointment not found"})
        }
        prescriptions[id] = {madicineName, instruction, dosage}
        res.json({success: true, message:'Prescription Generated Successfully'})
    }
    catch(err){
        console.error(err)
    }
}

export const getPrescription = async(req: Request, res: Response) => {
    try{
        const id = req.params.id
        if (id in prescriptions){
            res.json(prescriptions[req.params.id])
        }
        res.json({error:'Prescription not found'})
    }
    catch(err){
        console.error(err)
    }
}