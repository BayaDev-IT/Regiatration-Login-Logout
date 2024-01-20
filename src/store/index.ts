import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";


export const store = configureStore({
    // devTools:false
    reducer: {
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch