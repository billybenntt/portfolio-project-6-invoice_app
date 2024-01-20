import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const initialFilterState = {
  filterOption: ['draft', 'pending', 'paid']
}


const initialState = {
    allInvoices: [],
    isLoading: true,
    ...initialFilterState
};


export const getAllInvoices = createAsyncThunk(
    'allInvoices/getAllInvoices',
    async (_, thunkAPI) => {
        try {
            // console.log(name);
            // console.log(thunkAPI);
            // console.log(thunkAPI.getState());
            // thunkAPI.dispatch(openModal());
            return 1;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);


const allInvoicesSlice = createSlice({
    name: 'allInvoices',
    initialState,
    reducers: {
        openForm: (state) => {
            console.log(state)
        },
        closeForm: (state) => {
            console.log(state)
        },
    },

    extraReducers: (builder) => {
        builder.
        addCase(getAllInvoices.pending, (state) => {
            state.isLoading = true;
        })

    },

});

export default allInvoicesSlice.reducer;