import { Router } from 'express'
import { generatePrescription, getPrescription } from '../controllers/prescription.controller'

const router = Router()

router.get("/:id", getPrescription)
router.post("/:id", generatePrescription)

export default router