
import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import collapsedReducer from '../slices/collapsedSlice';
import loadingSlice from '../slices/loadingSlice';

const rootReducer = combineReducers({
    collapsed: collapsedReducer,
    loading: loadingSlice,
    auth: authSlice
})

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;