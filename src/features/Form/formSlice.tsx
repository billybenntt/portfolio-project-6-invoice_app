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
            } else {
                state.senderAddress[inputName] = inputValue
            }
        },
        handleItemChange: (state, {payload}) => {
            const {inputName, inputValue, index} = payload

            // Check that our value is a number or not
            const isValidNumber = !isNaN(inputValue)

            //  Item name Allows Strings and Numbers
            //  Other fields are numeric only.
            if (inputName === 'name' || isValidNumber) {
                // Update Total if Changing Price or Quantity
                if (inputName === 'quantity') {
                    const quantity = +inputValue
                    const price = +state.items[index]['price']
                    state.items[index]['total'] = (quantity * price).toString()
                }
                if (inputName === 'price') {
                    const price = +inputValue
                    const quantity = +state.items[index]['quantity']
                    state.items[index]['total'] = (quantity * price).toString()
                }
                state.items[index][inputName] = inputValue
            }

        },
        deleteItem: (state, {payload}) => {
            const {index} = payload
            state.items.splice(index, 1)
        },
        createItem: (state) => {

            const newItem = {
                "name": "New Item",
                "quantity": 1,
                "price": 1,
                "total": 1
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