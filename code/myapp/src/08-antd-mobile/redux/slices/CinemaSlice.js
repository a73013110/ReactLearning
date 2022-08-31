import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

const cinemaSlice = createSlice({
    name: "cinema",
    initialState,
    reducers: {
        changeList(state, action) {
            state.list = action.payload;
        }
    }
})

export default cinemaSlice.reducer

export const cinemaActions = cinemaSlice.actions