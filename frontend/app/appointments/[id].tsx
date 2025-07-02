import { generatePrescription, getPrescriptionById } from '@/store/slices/prescription'
import { RootState, useAppDispatch } from '@/store/store'
import { Button } from '@react-navigation/elements'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Modal, Text, TextBase, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const AppointmentDetails = () => {
    const { id } = useLocalSearchParams()
    const appointment = useSelector((state: RootState) => state.appointment.appointmentList.find((item) => item.id === Number(id as string)))
    const prescription = useSelector((state: RootState) => state.prescription.prescription)
    const loading = useSelector((state: RootState) => state.prescription.loading)
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
        setMedicine('')
        setDosage('')
        setinstructions('')
    };
    useEffect(() => {
        const getPrescription = async () => {
            await dispatch(getPrescriptionById(id as string))
        }
        if (id) {
            getPrescription()
        }
    }, [])
    if (!appointment) return <Text>Loading...</Text>;

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <View style={{ padding: 20 }}>
                <Text>Name:{appointment.name}</Text>
                <Text> Age: {appointment.age}</Text>
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


                <View style={{ marginTop: 20, display: 'flex', flexDirection: 'column', }}>
                <Text>Prescriptions:</Text>
                    {loading ? <View style={{flex:1, justifyContent:'center', alignItems:'center', display:'flex'}}><Text>Loading...</Text></View> : prescription.map((item, id) => (
                        <View key={id} style={{marginBottom:15}}>
                            <Text>Madicine Name:{item?.medicineName}</Text>
                            <Text>Dosage: {item?.dosage}</Text>
                            <Text>Instructions:{item?.instructions}</Text>
                        </View>
                    ))
                    }
                </View>

            </View>
        </SafeAreaView>
    )
}

export default AppointmentDetails