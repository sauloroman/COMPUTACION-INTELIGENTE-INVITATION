import { useDispatch, useSelector } from 'react-redux';
import {
  startGettingTicketByKeyPass,
  startGettingTicketsOfEvent,
} from '../store/ticket/ticket.thunks';
import { resetTicketSlice } from '../store/ticket/ticket.slice';
import { resetUIState } from '../store/ui/ui.slice';

export const useTicket = () => {
  const dispatch = useDispatch();
  const { ticket, tickets } = useSelector((state) => state.ticket);
  const localStorageName = 'computacion-inteligente-2024';

  const getTicket = (keyPass = '') => {
    if (!keyPass) throw new Error('La clave de acceso es necesaria');
    dispatch(startGettingTicketByKeyPass(keyPass));
  };

  const getTicketsOfEvent = () => {
    const event = ticket.event;
    dispatch(startGettingTicketsOfEvent(event));
  };

  const renewTicket = () => {
    const keyPassLocalStorage = JSON.parse(
      localStorage.getItem(localStorageName)
    );
    dispatch(startGettingTicketByKeyPass(keyPassLocalStorage));
  };

  const deleteTicket = () => {
    localStorage.removeItem(localStorageName);
    dispatch( resetUIState() );
    dispatch(resetTicketSlice());
  };

  return {
    ticket,
    tickets,

    getTicket,
    getTicketsOfEvent,
    renewTicket,
    deleteTicket,
  };
};
