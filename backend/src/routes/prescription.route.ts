import { Router } from 'express'
import { generatePrescription, getPrescription } from 'src/controllers/prescription.controller'

const router = Router()

router.get("/", getPrescription)
router.post("/", generatePrescription)

export default router