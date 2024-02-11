import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Invoice} from "../../types/global";
import data from "../../data/sampleAllData.tsx";

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
            .addCase(addInvoice.pending, (state) => {
                console.log("pending", state);
            })
            .addCase(addInvoice.fulfilled, (state, {payload}) => {
                const dummyInvoice = {...payload, status: "pending"}

                const currentIndex = state.allInvoices.findIndex((item) => item.id === dummyInvoice.id)
                if (currentIndex >= 0) {
                    state.allInvoices[currentIndex] = dummyInvoice
                } else {
                    state.allInvoices.push(dummyInvoice)
                }

            })
            .addCase(addInvoice.rejected, (state) => {
                console.log("rejected", state);
            });
    },

});

// STORE SLICE
export default invoiceSlice.reducer;
export {addInvoice}

// STORE ACTIONS
export const {
    openModal,
    closeModal,
    getSingleInvoice,
}
    = invoiceSlice.actions

