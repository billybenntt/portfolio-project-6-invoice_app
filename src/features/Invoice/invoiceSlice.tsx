import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Invoice} from "../../types/global";
import data from "../../data/sampleAllData.tsx";
import fetchData from "../../utils/axios/FetchData.ts";

const defaultData = data as Invoice[]


// INITIAL STATE
const initialState: any = {
    allInvoices: defaultData,
    singleInvoice: defaultData[0],
    isLoading: true,
    showModal: false,
};


const addInvoice = createAsyncThunk(
    'invoice/addInvoice',
    async (_, thunkAPI: any) => {
        try {
            return thunkAPI.getState()['form']['invoice']

        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const updateInvoice = createAsyncThunk(
    'invoice/updateInvoice',
    async (_, thunkAPI: any) => {
        try {
            return thunkAPI.getState()['form']['invoice']

        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const deleteInvoice = createAsyncThunk(
    'invoice/deleteInvoice',
    async (_, thunkAPI: any) => {
        try {

            return thunkAPI.getState()['form']['invoice']

        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);







// ACTIONS LOCAL

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
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

    extraReducers: (builder) => {
        builder
            .addCase(addInvoice.fulfilled, (state, {payload}) => {
                const dummyInvoice = {...payload, status: "pending"}
                state.allInvoices.push(dummyInvoice)
            })
            .addCase(updateInvoice.fulfilled, (state, {payload}) => {
                const dummyInvoice = {...payload, status: "paid"}
                const currentIndex = state.allInvoices.findIndex((item) => item.id === dummyInvoice.id)
                if (currentIndex >= 0) {
                    state.allInvoices[currentIndex] = dummyInvoice
                    state.singleInvoice = dummyInvoice
                }
            })


    },

});

// STORE SLICE
export default invoiceSlice.reducer;
export {addInvoice, updateInvoice, deleteInvoice}

// STORE ACTIONS
export const {
    openModal,
    closeModal,
    getSingleInvoice,
}
    = invoiceSlice.actions

