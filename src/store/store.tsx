import { configureStore } from '@reduxjs/toolkit'
import AllInvoicesSlice from "../features/AllInvoices/allInvoicesSlice.tsx";
import invoicesSlice from "../features/Invoice/invoiceSlice.tsx";

export const store = configureStore({
  reducer: {
      allInvoices: AllInvoicesSlice,
      invoice: invoicesSlice
  }
})



// TYPESCRIPT REQUIRED

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {invoices: invoicesState}
export type AppDispatch = typeof store.dispatch


