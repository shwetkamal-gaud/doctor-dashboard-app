import { Appointment } from "@/types/type"
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"


interface State {
    appointmentList: Appointment[]
    singleAppointment: Appointment | null
    loading: boolean
    error: string | null
}

const initialState: State = {
    appointmentList: [],
    singleAppointment: null,
    loading: false,
    error: null
}

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
    const res = await axios.get('https://doctor-dashboard-app.onrender.com/appointments')
    console.log(res,"sfs")
    return res.data
})

export const getAppointmentById = createAsyncThunk('appointments/getAppointmentById', async (id: string) => {
    const res = await axios.get(`https://doctor-dashboard-app.onrender.com/appointments/${id}`)
    return res.data
})
const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(fetchAppointments.pending, (state) => {
                console.log("asdkj")
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAppointments.fulfilled, (state, action: PayloadAction<Appointment[]>) => {
                state.appointmentList = action.payload;
                state.loading = false
            })
            .addCase(fetchAppointments.rejected, (state, action) => {
                console.log("reject")
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch list';
            })
            .addCase(getAppointmentById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAppointmentById.fulfilled, (state, action: PayloadAction<Appointment>) => {
                state.singleAppointment = action.payload;
                state.loading = false
            })
            .addCase(getAppointmentById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to get appointment';
            })
    }
})

export default appointmentSlice.reducer