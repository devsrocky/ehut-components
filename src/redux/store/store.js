import { configureStore } from "@reduxjs/toolkit"
import { settingSlice } from "../states/settingSlice"


export default configureStore({
    reducer: {
        setting: settingSlice.reducer
    }
})