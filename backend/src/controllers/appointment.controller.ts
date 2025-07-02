import { Request, Response } from "express";
import { appointments } from "../data/mockData";

export const getAppointmentsList = async (req: Request, res: Response) => {
    try {
        res.json(appointments)
        return
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
            return
        }
        const appointment = appointments.find((item) => item.id === Number(id))
        if (!appointment) {
            res.json({ error: "Appointment not found" })
            return
        }

        res.json(appointment)
        return
    } catch (error) {
        console.error(error)
    }
}