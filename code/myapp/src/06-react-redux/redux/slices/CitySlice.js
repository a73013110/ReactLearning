import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cityName: "北京"
}

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        changeCity(state, action) {
            state.cityName = action.payload;
        }
    }
})

export default citySlice.reducer

export const cityActions = citySlice.actions