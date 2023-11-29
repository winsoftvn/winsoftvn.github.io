import { createSlice } from "@reduxjs/toolkit";

export const dataAddSlice = createSlice({
    name: "dataAdd",
    initialState: {
        //Cận lâm sàn
        sieuam: [],
    },
    reducers: {
        setDataSieuAm: (state, action) => {
            state.sieuam = action.payload;
        },
    },
});
export const {
    //Cận lâm sàn
    setDataSieuAm,
} = dataAddSlice.actions;
export default dataAddSlice.reducer;
