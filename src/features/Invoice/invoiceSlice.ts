import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Invoice} from "../../types/app";
import data from "../../utils/placeholderData.ts";
import fetchData from "../../utils/axios/FetchData.ts";
import {addDataToLocalStorage, getDataFromLocalStorage, removeDataFromLocalStorage} from "../../utils/localStorage.ts";

const defaultData = data as Invoice[]


// INITIAL STATE
const initialState: any = {
    allInvoices: getDataFromLocalStorage("invoices") || [],
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
            return thunkAPI.rejectWithValue('Failed to load Invoices', error);
        }
    }
);


const addInvoice = createAsyncThunk(
    'invoice/addInvoice',
    async (_, thunkAPI: any) => {
        try {
            const newInvoice = thunkAPI.getState()['form']['invoice']
            const {data: [invoice]} = await fetchData.post("invoices", newInvoice)
            removeDataFromLocalStorage("invoices")
            return invoice
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to Add New Invoice', error);
        }
    }
);

const updateInvoice = createAsyncThunk(
    'invoice/updateInvoice',
    async (_, thunkAPI: any) => {
        try {
            const updatedInvoice = thunkAPI.getState()['form']['invoice']
            const {data: [invoice]} = await fetchData.patch(`invoices?invoice_id=eq.${updatedInvoice.invoice_id}`,
                updatedInvoice)
            removeDataFromLocalStorage("invoices")
            return invoice
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to Modify Invoice', error);
        }
    }
);

const deleteInvoice = createAsyncThunk(
    'invoice/deleteInvoice',
    async (id: string, thunkAPI: any) => {
        try {
            const {data: [invoice]} = await fetchData.delete(`invoices?invoice_id=eq.${id}`)
            return invoice
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to Delete Invoice', error);
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
            state.singleInvoice = state.allInvoices.find((item: any) => {
                return item.invoice_id === id
            })
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllInvoices.fulfilled, (state, {payload}) => {
                state.allInvoices = payload
            })
            .addCase(addInvoice.fulfilled, (state, {payload}) => {
                state.allInvoices.push(payload)
            })
            .addCase(updateInvoice.fulfilled, (state, {payload}) => {
                const currentIndex = state.allInvoices.findIndex((item: any) => item.invoice_id === payload.invoice_id)
                if (currentIndex >= 0) {
                    state.allInvoices[currentIndex] = payload
                    state.singleInvoice = payload
                }
            })
            .addCase(deleteInvoice.fulfilled, (state, {payload}) => {
                state.allInvoices = state.allInvoices.filter((item: any) => item.invoice_id !== payload.invoice_id)
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
} = invoiceSlice.actions

