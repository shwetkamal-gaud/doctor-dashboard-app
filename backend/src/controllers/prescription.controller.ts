import { Request, Response } from "express";
import { appointments, prescriptions } from "../data/mockData";

export const generatePrescription = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { medicineName, instructions, dosage } = req.body
        const appointment = appointments.find((item) => item.id === Number(id))
        if (!appointment) {
            res.status(404).json({ error: "Appointment not found" })
            return
        }
        prescriptions[id].push({ medicineName, instructions, dosage })
        res.json({  })
    }
    catch (err) {
        console.error(err)
    }
}

export const getPrescription = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        if (id in prescriptions) {
            res.json(prescriptions[req.params.id])
            return
        }
        res.json({ error: 'Prescription not found' })
    }
    catch (err) {
        console.error(err)
    }
}