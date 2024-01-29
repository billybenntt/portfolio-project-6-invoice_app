import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import data from "../../data/sampleAllData.tsx";
import {Invoice} from "../../types/global";


const defaultData = JSON.parse(JSON.stringify(data))

type AddressChangePayload = {
    inputName: string;  // Assuming inputName is an array of strings
    inputValue: string;
    inputCaller: string// Change 'any' to the appropriate type if possible
};

// INITIAL STATE
const initialState: any = {
    singleInvoice: defaultData[0],
    clientAddress: {
        street: "",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom"
    },
    senderAddress: {
        street: "Test Street",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom"
    },
    items: [
        {
            name: "Banner Design",
            quantity: 1,
            price: 156,
            total: 156
        },
        {
            name: "Banner Design",
            quantity: 1,
            price: 156,
            total: 156
        }
    ],
};


const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        openForm: (state) => {
            console.log(state)
        },
        closeForm: (state) => {
            console.log(state)
        },
        handleChange: (state, {payload}) => {
            const {inputName, inputValue} = payload
            state.singleInvoice[inputName] = inputValue
        },
        handleAddressChange: (state, {payload}: PayloadAction<AddressChangePayload>) => {
            const {inputName, inputValue, inputCaller} = payload
            if (inputCaller === 'client') {
                state.clientAddress[inputName] = inputValue
                console.log("updated client address")
            } else {
                state.senderAddress[inputName] = inputValue
                console.log("updated sender address")
            }
        },


        getSingleInvoice: (state, {payload}) => {
            const {id} = payload
            state.singleInvoice = state.allInvoices.find((item: any) => item.id === id) as Invoice
        },

    },


});

export default formSlice.reducer;
export const {
    handleChange,
    handleAddressChange
} = formSlice.actions;