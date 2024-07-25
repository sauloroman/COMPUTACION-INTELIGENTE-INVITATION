import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/ui.slice";
import { ticketSlice } from "./ticket/ticket.slice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    ticket: ticketSlice.reducer
  }
})