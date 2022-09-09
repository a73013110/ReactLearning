import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list1: [],
    list2: []
}

const slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        // getList(state, action) {
        //     console.log("getList", action)
        //     state.list1 = action.payload;
        // },        
        changeList1(state, action) {
            // console.log("changeList", action)
            state.list1 = action.payload;
        },       
        changeList2(state, action) {
            // console.log("changeList", action)
            state.list2 = action.payload;
        }
    }
})

export default slice.reducer
export const sliceAction = slice.actions