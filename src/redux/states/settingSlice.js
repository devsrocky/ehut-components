import { createSlice } from "@reduxjs/toolkit";


export const settingSlice = createSlice({
    name: 'setting',

    initialState: {
        loader: 'd-none'
    },

    reducers: {
        OpenEhutLoader: (state) => {
            state.loader = ""
        },
        CloseEhutLoader: (state) => {
            state.loader = "d-none"
        }
    }

})

export const { OpenEhutLoader, CloseEhutLoader} = settingSlice.actions;
export default settingSlice.reducer;