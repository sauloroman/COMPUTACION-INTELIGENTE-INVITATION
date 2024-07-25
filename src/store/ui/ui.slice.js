import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      error: {
        isOpen: false,
        errorMessage: ''
      },
      isLoading: false,
      modal: {
        isOpen: false,
      },
      menu: {
        isOpen: false,
      }
    },
    reducers: {

      setIsLoading: ( state, { payload } ) => {
        state.isLoading = payload;
      },

      setError: ( state, { payload }) => {
        state.error = payload;
      },

      setModal: ( state, { payload }) => {
        state.modal.isOpen = payload;
      },

      setMenu: ( state, { payload } ) => {
        state.menu.isOpen = payload;
      },

      resetUIState: ( state, _ ) => {
        state.error = {
          isOpen: false,
          errorMessage: ''
        };
        state.isLoading = false;
        state.modal = { isOpen: false }
        state.menu = { isOpen: false }
      }

    }
})

export const { 
  setIsLoading, 
  setError, 
  setModal, 
  setMenu,
  resetUIState,
} = uiSlice.actions;
