import { Apointment, Prescription } from "src/types/type";

export const appointments: Apointment[] = [
    {
        id: 1,
        name: 'Shwetkamal',
        symptoms: 'Fever',
        time: new Date(),
        age: 22
    },
    {
        id: 2,
        name: 'Gaud',
        symptoms: 'Cough',
        time: new Date(),
        age: 22
    },
    {
        id: 3,
        name: 'Kamal',
        symptoms: 'Headache',
        time: new Date(),
        age: 22
    },
    {
        id: 4,
        name: 'Shwet',
        symptoms: 'Depression',
        time: new Date(),
        age: 22
    },
]

export const prescriptions: Record<string, Prescription>= {

}