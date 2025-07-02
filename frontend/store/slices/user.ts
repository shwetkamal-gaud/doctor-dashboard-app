import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { name: '', password: '' },
    reducers: {
        login: (state, action:PayloadAction<{name: string, password: string}>) => {
            state.name = action.payload.name;
            state.password = action.payload.password
        }
    }
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
