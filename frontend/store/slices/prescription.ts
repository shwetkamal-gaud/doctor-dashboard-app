import { Prescription } from "@/types/type"
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"


interface State {
    prescription: Prescription[]
    loading: boolean
    error: string | null
}

const initialState: State = {
    prescription: [],
    loading: false,
    error: null
}

export const generatePrescription = createAsyncThunk('prescription/generatePrescription', async ({ id, payload }: { id: number, payload: Prescription }) => {
    const res = await axios.post(`https://doctor-dashboard-app.onrender.com/prescriptions/${id}`, payload)
    return res.data
})

export const getPrescriptionById = createAsyncThunk('prescription/getPrescriptionById', async (id: string) => {
    const res = await axios.get(`https://doctor-dashboard-app.onrender.com/prescriptions/${id}`)
    return res.data
})

const prescriptionSlice = createSlice({
    name: 'prescription',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(generatePrescription.fulfilled, (state, action: PayloadAction<Record<string,Prescription>>) => {
                console.log(action.payload," in actio")
                
            })
            .addCase(getPrescriptionById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPrescriptionById.fulfilled, (state, action: PayloadAction<Prescription[]>) => {
                state.prescription = action.payload;
                state.loading = false
            })
            .addCase(getPrescriptionById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to get prescritpion';
            })
    }
})

export default prescriptionSlice.reducer