import abrasaAPI from '../../api/abrasaAPI';
import { setError, setIsLoading } from '../ui/ui.slice';
import { setTicket, setTickets } from './ticket.slice';

export const startGettingTicketByKeyPass = (keyPass = '') => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const { data } = await abrasaAPI.get(`/api/tickets/keyPass/${keyPass}`);
      const { user, isActive, phone, ...restTicket } = data;

      dispatch(setTicket(restTicket));
      localStorage.setItem(
        'computacion-inteligente-2024',
        JSON.stringify(restTicket.keyPass)
      );

    } catch (error) {
      const { error: errorMessage } = error.response?.data;

      if (errorMessage !== 'No existe boleto con clave null') {
        dispatch(
          setError({ isOpen: true, errorMessage, })
        );

        setTimeout(() => {
          dispatch(setError({ isOpen: false, errorMessage: ''}))
        }, 3000);
      }
    }

    dispatch(setIsLoading(false));
  };
};

export const startGettingTicketsOfEvent = (eventID = '') => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const { data } = await abrasaAPI.get(
        `/api/tickets/event/${eventID}?limit=100`
      );
      const { tickets } = data;

      const nameTickets = tickets.map((ticket) => ticket.name).filter( nameTicket => nameTicket !== 'Profesores ').sort();
      dispatch(setTickets(nameTickets));
    } catch (error) {
      const { error: errorMessage } = error.response?.data;
      console.log(errorMessage);
    }

    dispatch(setIsLoading(false));
  };
};
