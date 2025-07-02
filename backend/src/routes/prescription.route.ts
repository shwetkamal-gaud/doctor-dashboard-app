import { Router } from 'express'
import { generatePrescription, getPrescription } from '../controllers/prescription.controller'

const router = Router()

router.get("/", getPrescription)
router.post("/", generatePrescription)

export default router