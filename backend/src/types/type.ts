export interface Apointment {
    id: number
    name:string
    age: number
    symptoms:string
    time:Date
}

export interface Prescription{
    madicineName: string
    dosage: string
    instruction?: string
}