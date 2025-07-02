import { Router } from 'express'
import { getAppointmentsList, getSingleAppointment } from '../controllers/appointment.controller'


const router = Router()

router.get("/:id", getAppointmentsList)
router.get("/:id", getSingleAppointment)

export default router