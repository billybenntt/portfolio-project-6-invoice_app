import {createSlice} from '@reduxjs/toolkit';
import {Invoice, InvoiceState} from "../../types/global";
import data from "../../data/sampleAllData.tsx";


const defaultData = data as Invoice[]


// INITIAL STATE
const initialState: InvoiceState = {
    allInvoices: defaultData,
    singleInvoice: defaultData[0],
    showForm: false,
    showModal: false,
    isLoading: true,
    isEditing: false
};


// ACTIONS LOCAL

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        openForm: (state, {payload}) => {
            state.isEditing = payload.isEditing
            state.showForm = true
        },
        closeForm: (state) => {
            state.showForm = false
        },
        openModal: (state) => {
            state.showModal = true
        },
        closeModal: (state) => {
            state.showModal = false
        },
        getSingleInvoice: (state, {payload}) => {
            const {id} = payload
            state.singleInvoice = state.allInvoices.find((item) => item.id === id) as Invoice
        },

    },

    extraReducers: (_) => {

    },

});

// STORE SLICE
export default invoiceSlice.reducer;
// STORE ACTIONS
export const {openForm, closeForm, openModal, closeModal, getSingleInvoice}
    = invoiceSlice.actions

