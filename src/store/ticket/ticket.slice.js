import { createSlice } from '@reduxjs/toolkit';

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState: {
      ticket: {},
      tickets: [],
    },
    reducers: {
      setTicket: ( state, { payload }) => {
        state.ticket = payload;
      },
  
      setTickets: ( state, { payload } ) => {
        state.tickets = payload;
      },
  
      resetTicketSlice: ( state, _ ) => {
        state.ticket = {};
        state.tickets = [];
      }
    },
})

export const {
  setTicket,
  setTickets,
  resetTicketSlice,
} = ticketSlice.actions;
