import { configureStore } from '@reduxjs/toolkit';
import collapsedReducer from '../slices/collapsedSlice';
import loadingSlice from '../slices/loadingSlice';

export const store = configureStore({
    reducer: {
        collapsed: collapsedReducer,
        loading: loadingSlice
    },
    devTools: true
});

// 取得store中dispatch的型別，因store.dispatch為funcion，直接取得該型態即可
export type AppDispatch = typeof store.dispatch;

// 取得store中State的型別，store.getState為function，但State都是非函數值，因此需透過ReturnType取得State真正型態
export type RootState = ReturnType<typeof store.getState>;
