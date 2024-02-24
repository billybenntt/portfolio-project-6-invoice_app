import { configureStore } from '@reduxjs/toolkit'
import FormSlice from "../features/Form/formSlice.ts";
import invoicesSlice from "../features/Invoice/invoiceSlice.ts";

export const store = configureStore({
  reducer: {
      form: FormSlice,
      invoice: invoicesSlice
  }
})



// TYPESCRIPT REQUIRED
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {invoices: invoicesState}
export type AppDispatch = typeof store.dispatch


