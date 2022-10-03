import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILoadingState {
    isLoading: boolean;
}

const initialState: ILoadingState = {
    isLoading: false
}

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
})

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;