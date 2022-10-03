import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interface/user/IUser";

export interface IAuthState {
    userInfo: IUser | undefined,
    isLogin: boolean
}

const initialState: IAuthState = {
    userInfo: undefined,
    isLogin: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<IUser>) => {
            state.userInfo = action.payload;
            state.isLogin = action.payload && action.payload.id !== undefined && action.payload !== null
        }
    }
})

export const { setUserInfo } = authSlice.actions;

export default authSlice.reducer;