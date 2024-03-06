import {AddressChangePayload} from "../../types/app";
import data from "../../utils/placeholderData.ts";
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InvoiceCreator} from "../../utils/InvoiceCreator.ts";

const defaultData = JSON.parse(JSON.stringify(data))[0]


// INITIAL STATE
const initialState = {
    invoice: {...defaultData},
    isError: false,
    isEditing: false,
    showForm: false,
}


const setFormInvoice = createAsyncThunk(
    'form/setFormInvoice',
    async (payloadInfo: string, thunkAPI: any) => {
        try {
            const dummyInvoice = new InvoiceCreator(defaultData).createInvoice()
            if (payloadInfo === 'edit') {
                return thunkAPI.getState()['invoice']['singleInvoice']
            }
            return dummyInvoice
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);


const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        openForm: (state, {payload}) => {
            state.isEditing = payload.isEditing
            state.showForm = true
        },
        closeForm: (state) => {
            state.showForm = false
            state.isEditing = false
        },

        handleChange: (state, {payload}) => {
            const {inputName, inputValue} = payload
            state.invoice[inputName] = inputValue
        },
        handleAddressChange: (state, {payload}: PayloadAction<AddressChangePayload>) => {
            const {inputName, inputValue, addressType} = payload
            if (addressType === 'client') {
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
                // Update Total when Changing Price or Quantity
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

            state.invoice.total = state.invoice.items.reduce((total: number, item: { total: string }) => {
                    return total + +item.total
                }, 0
            )

        },
        deleteItem: (state, {payload}) => {
            const {index} = payload
            state.invoice.items.splice(index, 1)
            state.invoice.total = state.invoice.items.reduce((total: number, item: { total: string }) => {
                    return total + +item.total
                }, 0
            )
        },
        createItem: (state) => {
            const newItem = {
                "name": "",
                "quantity": "",
                "price": "",
                "total": 0
            }

            state.invoice.items.push(newItem)

            state.invoice.total = state.invoice.items.reduce((total: number, item: { total: string }) => {
                    return total + +item.total
                }, 0
            )
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(setFormInvoice.pending, (state) => {
                console.log(state);
            })
            .addCase(setFormInvoice.fulfilled, (state, action) => {
                state.invoice = action.payload
            })
            .addCase(setFormInvoice.rejected, (state) => {
                console.log(state);
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
    createItem,
    openForm,
    closeForm
} = formSlice.actions;

