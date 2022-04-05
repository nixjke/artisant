import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'

const rootReducer = combineReducers({
  products: productSlice
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
