import { configureStore, combineReducers } from '@reduxjs/toolkit'

import TabbarSlice from './slices/TabbarSlice'

const reducers = combineReducers({
    tabbar: TabbarSlice
})

const store = configureStore({
    reducer: reducers
})

export default store

export type IStoreState = ReturnType<typeof reducers>;