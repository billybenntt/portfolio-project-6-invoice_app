import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Invoice} from "../../types/global";
import data from "../../data/sampleAllData.tsx";
import fetchData from "../../utils/axios/FetchData.ts";
import {addDataToLocalStorage, getDataFromLocalStorage, removeDataFromLocalStorage} from "../../utils/localStorage.ts";

const defaultData = data as Invoice[]


// INITIAL STATE
const initialState: any = {
    allInvoices: defaultData,
    singleInvoice: defaultData[0],
    isLoading: true,
    showModal: false,
};

const getAllInvoices = createAsyncThunk(
    'invoice/getAllInvoices',
    async (_, thunkAPI: any) => {
        const storedData = getDataFromLocalStorage("invoices");

        try {
            if (!storedData) {
                const {data} = await fetchData.get("invoices?select=*")
                addDataToLocalStorage("invoices", data)
                return data;
            }
            return storedData

        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);


const addInvoice = createAsyncThunk(
    'invoice/addInvoice',
    async (_, thunkAPI: any) => {
        try {
            const newInvoice = thunkAPI.getState()['form']['invoice']
            const response = await fetchData.post("invoices", newInvoice)
            removeDataFromLocalStorage("invoices")
            console.log("New Invoice", newInvoice)
            console.log("New Invoice", response)
            return newInvoice
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const updateInvoice = createAsyncThunk(
    'invoice/updateInvoice',
    async (_, thunkAPI: any) => {
        try {
            const changedInvoice = thunkAPI.getState()['form']['invoice']
            const response = await fetchData.patch(`invoices?invoice_id=eq.${changedInvoice.invoice_id}`, changedInvoice)
            removeDataFromLocalStorage("invoices")
            return changedInvoice
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
            state.singleInvoice = state.allInvoices.find((item) => item.invoice_id === id) as Invoice
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllInvoices.fulfilled, (state, {payload}) => {
                state.allInvoices = payload
            })
            .addCase(addInvoice.fulfilled, (state, {payload}) => {
                const dummyInvoice = {...payload}
                state.allInvoices.push(dummyInvoice)
            })
            .addCase(updateInvoice.fulfilled, (state, {payload}) => {
                const dummyInvoice = {...payload, status: "paid"}
                const currentIndex = state.allInvoices.findIndex((item: any) => item.invoice_id === dummyInvoice.invoice_id)
                if (currentIndex >= 0) {
                    state.allInvoices[currentIndex] = dummyInvoice
                    state.singleInvoice = dummyInvoice
                }
            })


    },

});

// STORE SLICE
export default invoiceSlice.reducer;
export {addInvoice, updateInvoice, deleteInvoice, getAllInvoices}

// STORE ACTIONS
export const {
    openModal,
    closeModal,
    getSingleInvoice,
}
    = invoiceSlice.actions

