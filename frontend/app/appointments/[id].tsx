import { generatePrescription, getPrescriptionById } from '@/store/slices/prescription'
import { RootState, useAppDispatch } from '@/store/store'
import { Button } from '@react-navigation/elements'
import { useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Modal, Text, TextInput, View } from 'react-native'
import { useSelector } from 'react-redux'

const AppointmentDetails = () => {
    const { id } = useLocalSearchParams()
    const appointment = useSelector((state: RootState) => state.appointment.appointmentList.find((item) => item.id === Number(id as string)))
    const prescription = useSelector((state: RootState) => state.prescription.prescription)
    const dispatch = useAppDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [medicine, setMedicine] = useState('');
    const [dosage, setDosage] = useState('');
    const [instructions, setinstructions] = useState('');
    const submitPrescription = async () => {
        await dispatch(generatePrescription({
            id: Number(id as string),
            payload: { medicineName: medicine, dosage, instructions }
        }));
        await dispatch(getPrescriptionById(id as string))
        setModalVisible(false);
    };

    if (!appointment) return <Text>Loading...</Text>;
    console.log(prescription, "as")
    return (
        <View style={{ padding: 20 }}>
            <Text>{appointment.name}, Age {appointment.age}</Text>
            <Text>Symptoms: {appointment.symptoms}</Text>

            <Button onPress={() => setModalVisible(true)}>Generate Prescription</Button>

            <Modal visible={modalVisible} animationType="slide">
                <View style={{ padding: 20 }}>
                    <TextInput placeholder="Medicine" value={medicine} onChangeText={setMedicine} />
                    <TextInput placeholder="Dosage" value={dosage} onChangeText={setDosage} />
                    <TextInput placeholder="instructions" value={instructions} onChangeText={setinstructions} />
                    <Button onPress={submitPrescription}> Submit </Button>
                </View>
            </Modal>

            {prescription && (
                <View style={{ marginTop: 20 }}>
                    <Text>Prescription:</Text>
                    {prescription.map((item) => (
                        <>
                            <Text>{item?.medicineName}</Text>
                            <Text>{item?.dosage}</Text>
                            <Text>{item?.instructions}</Text>
                        </>
                    ))
                    }
                </View>
            )}
        </View>

    )
}

export default AppointmentDetails