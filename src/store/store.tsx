import { configureStore } from '@reduxjs/toolkit'
import AllInvoicesSlice from "../features/AllInvoices/allInvoicesSlice.tsx";

export const store = configureStore({
  reducer: {
      allInvoices: AllInvoicesSlice
  }
})

