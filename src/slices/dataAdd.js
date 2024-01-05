import { createSlice } from "@reduxjs/toolkit";

export const dataAddSlice = createSlice({
    name: "dataAdd",
    initialState: {
        //Cận lâm sàn
        sieuam: [],
        employee: [],
    },
    reducers: {
        setDataEmployee: (state, action) => {
            state.employee = action.payload;
        },
        setDataSieuAm: (state, action) => {
            state.sieuam = action.payload;
        },
    },
});
export const {
    //Employee
    setDataEmployee,
    //Cận lâm sàn
    setDataSieuAm,
} = dataAddSlice.actions;
export default dataAddSlice.reducer;
