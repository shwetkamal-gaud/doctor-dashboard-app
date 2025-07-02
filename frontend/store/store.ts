import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from './slices/appointment'
import prescriptionReducer from './slices/prescription'
import userReducer from './slices/user'
import { useDispatch } from 'react-redux';


export const store = configureStore({
    reducer: {
        appointment: appointmentReducer,
        prescription: prescriptionReducer,
        user: userReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

