import {AddressChangePayload} from "../../types/redux";
import data from "../../data/sampleAllData.tsx";
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

const defaultData = JSON.parse(JSON.stringify(data))[0]


// INITIAL STATE
const initialState = {
    invoice: {...defaultData}
}


const setFormInvoice = createAsyncThunk(
    'form/setFormInvoice',
    async (payloadInfo: string, thunkAPI: any) => {
        try {
            console.log(payloadInfo)
            const {singleInvoice} = thunkAPI.getState()['invoice']
            // thunkAPI.dispatch(openModal());
            return singleInvoice
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);


const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        handleChange: (state, {payload}) => {
            const {inputName, inputValue} = payload
            state.invoice[inputName] = inputValue
        },
        handleAddressChange: (state, {payload}: PayloadAction<AddressChangePayload>) => {
            const {inputName, inputValue, inputCaller} = payload
            if (inputCaller === 'client') {
                state.invoice.clientAddress[inputName] = inputValue
            } else {
                state.invoice.senderAddress[inputName] = inputValue
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
                    const quantity: number = +inputValue
                    const price: number = +state.invoice.items[index]['price']
                    state.invoice.items[index]['total'] = (quantity * price).toString()
                }
                if (inputName === 'price') {
                    const price: number = +inputValue
                    const quantity: number = +state.invoice.items[index]['quantity']
                    state.invoice.items[index]['total'] = (quantity * price).toString()
                }
                state.invoice.items[index][inputName] = inputValue
            }

        },
        deleteItem: (state, {payload}) => {
            const {index} = payload
            state.invoice.items.splice(index, 1)
        },
        createItem: (state) => {
            const newItem = {
                "name": "New Item",
                "quantity": 1,
                "price": 1,
                "total": 1
            }
            state.invoice.items.push(newItem)
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(setFormInvoice.pending, (state) => {
                console.log("pending", state);
            })
            .addCase(setFormInvoice.fulfilled, (state, action) => {
                state.invoice = action.payload
            })
            .addCase(setFormInvoice.rejected, (state) => {
                console.log("rejected", state);
            });
    },

});

export default formSlice.reducer;
export {setFormInvoice}
export const {
    handleChange,
    handleAddressChange,
    handleItemChange,
    deleteItem,
    createItem
} = formSlice.actions;

