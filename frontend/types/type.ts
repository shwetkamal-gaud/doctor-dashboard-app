export interface Appointment {
    id: number
    name: string
    age: number
    symptoms: string
    time: string
}

export interface Prescription {
    medicineName: string
    dosage: string
    instructions?: string
}