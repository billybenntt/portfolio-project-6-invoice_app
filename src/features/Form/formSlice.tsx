import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import data from "../../data/sampleAllData.tsx";


const defaultData = JSON.parse(JSON.stringify(data))[0]

type AddressChangePayload = {
    inputName: string;  // Assuming inputName is an array of strings
    inputValue: string;
    inputCaller: string// Change 'any' to the appropriate type if possible
};

// INITIAL STATE
const initialState = {
    ...defaultData
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        handleChange: (state, {payload}) => {
            const {inputName, inputValue} = payload
            state[inputName] = inputValue
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
        handleItemChange: (state, {payload}) => {
            const {inputName, inputValue, index} = payload
            state.items[index][inputName] = inputValue
        },
        deleteItem: (state, {payload}) => {
            const {index} = payload
            state.items.splice(index, 1)
        },
        createItem: (state) => {

            const newItem = {
                "name": "New Item",
                "quantity": 1,
                "price": 0,
                "total": 0
            }

            state.items.push(newItem)
        }

    },


});

export default formSlice.reducer;
export const {
    handleChange,
    handleAddressChange,
    handleItemChange,
    deleteItem,
    createItem
} = formSlice.actions;