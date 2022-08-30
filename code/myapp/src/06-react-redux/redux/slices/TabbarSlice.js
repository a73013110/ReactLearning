import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: true
}

const tabbarSlice = createSlice({
    name: "tabbar",
    initialState,
    reducers: {
        hide(state) {
            state.show = false;
        },
        show(state) {
            state.show = true;
        }
    }
})

export default tabbarSlice.reducer

export const tabbarActions = tabbarSlice.actions