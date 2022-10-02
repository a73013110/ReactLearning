import { createSlice } from "@reduxjs/toolkit";

export interface ICollapsedState {
    isCollapsed: boolean;
}

const initialState: ICollapsedState = {
    isCollapsed: false
}

export const collapsedSlice = createSlice({
    name: "collapsed",
    initialState,
    reducers: {
        toggleCollapsed: (state) => {
            state.isCollapsed = !state.isCollapsed;
        }
    }
})

export const { toggleCollapsed } = collapsedSlice.actions;

export default collapsedSlice.reducer;