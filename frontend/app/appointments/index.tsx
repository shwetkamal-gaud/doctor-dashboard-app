import { fetchAppointments } from '@/store/slices/appointment'
import { RootState, useAppDispatch } from '@/store/store'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Picker } from '@react-native-picker/picker';

const AppointmentsList = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const appointments = useSelector((state: RootState) => state.appointment.appointmentList)
    const loading = useSelector((state: RootState) => state.appointment.loading)
    const [filter, setFilter] = useState<null | 'AM' | 'PM'>(null)
    useEffect(() => {
        console.log("hl")
        dispatch(fetchAppointments());
    }, [])

    const filtered = appointments.filter((item) => {
        return item.time.includes(filter ?? '')
    })
    console.log(filtered, "fil", appointments)
    return (
        <View style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Picker
                selectedValue={filter}
                onValueChange={(itemValue, itemIndex) =>
                    setFilter(itemValue)
                }>
                <Picker.Item label="All" value={null} />
                <Picker.Item label="Morning" value="AM" />
                <Picker.Item label="Evening" value="PM" />
            </Picker>
            <View style={{ width: '100%', borderBottomWidth: 1, shadowOpacity: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <Text>Name</Text>
                <Text>Age</Text>
                <Text>Symptoms</Text>
                <Text>Time</Text>
            </View>
            {loading ? <Text>Loading...</Text> :
                <FlatList
                    data={filtered}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(item) => (
                        <TouchableOpacity onPress={() => router.push({
                            pathname: '/appointments/[id]',
                            params: { id: item.item.id },
                        })
                        } style={{ width: '100%', borderRadius: "12px", shadowOpacity: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text>{item.item.name}</Text>
                            <Text>{item.item.age}</Text>
                            <Text>{item.item.symptoms}</Text>
                            <Text>{item.item.time}</Text>
                        </TouchableOpacity>
                    )}
                />
            }
        </View>
    )
}

export default AppointmentsList


