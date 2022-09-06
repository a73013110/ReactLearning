import { createSlice } from '@reduxjs/toolkit'

interface IState {
    isTabbarShow: boolean
}

const initialState: IState = {
    isTabbarShow: true
}

const tabbarSlice = createSlice({
    name: "tabbar",
    initialState,
    reducers: {
        hide(state) {
            state.isTabbarShow = false;
        },
        show(state) {
            state.isTabbarShow = true;
        }
    }
})

export default tabbarSlice.reducer

export const tabbarAction = tabbarSlice.actions