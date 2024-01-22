import {createSlice} from '@reduxjs/toolkit';


interface InvoiceState {
    singleInvoice: object[]
    showForm: boolean,
    isLoading: boolean,
    isEditing: boolean
}

const initialState: InvoiceState = {
    singleInvoice: [],
    showForm: true,
    isLoading: true,
    isEditing: false
};


const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        openForm: (state) => {
            state.showForm = true
        },
        closeForm: (state) => {
            state.showForm = false
        },

    },

    extraReducers: (_) => {

    },

});

// STORE SLICE
export default invoiceSlice.reducer;
// STORE ACTIONS
export const { openForm, closeForm } = invoiceSlice.actions

