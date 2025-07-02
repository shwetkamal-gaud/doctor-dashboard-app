import { Appointment, Prescription } from "../types/type";

export const appointments: Appointment[] = [
    {
        id: 1,
        name: 'Shwetkamal',
        symptoms: 'Fever',
        time: "10:00 AM",
        age: 22
    },
    {
        id: 2,
        name: 'Gaud',
        symptoms: 'Cough',
        time: "11:00 AM",
        age: 22
    },
    {
        id: 3,
        name: 'Kamal',
        symptoms: 'Headache',
        time:"12:00 PM",
        age: 22
    },
    {
        id: 4,
        name: 'Shwet',
        symptoms: 'Depression',
        time: "01:00 PM",
        age: 22
    },
]

export const prescriptions: Record<string, Prescription[]> = {

}