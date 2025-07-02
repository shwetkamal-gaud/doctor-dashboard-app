import { Request, Response } from "express";
import { appointments } from "src/data/mockData";

export const getAppointmentsList = async (req: Request, res: Response) => {
    try {
        res.json(appointments)
    }
    catch (e) {
        console.error(e)
    }
}

export const getSingleAppointment = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        if (!id) {
            res.json({ error: "Id is required" })
        }
        const appointment = appointments.find((item) => item.id === Number(id))
        if (!appointment) {
            res.json({ error: "Appointment not found" })
        }
        res.json(appointment)
    } catch (error) {
        console.error(error)
    }
}