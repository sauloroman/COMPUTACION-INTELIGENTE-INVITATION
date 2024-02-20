import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      error: {
        hasError: false,
        errorMessage: ''
      },
      isLoading: false,
      modal: {
        isOpen: false,
        content: '',
        titleModal: '',
      }
    },
    reducers: {

      setIsLoading: ( state, { payload } ) => {
        state.isLoading = payload;
      },

      setError: ( state, { payload }) => {
        state.error = payload;
      },

      resetError: ( state, _ ) => {
        state.error = {
          hasError: false,
          errorMessage: ''
        }
      },

      setModal: ( state, { payload }) => {
        state.modal = payload;
      },

      resetModal: ( state, _ ) => {
        state.modal = {
          isOpen: false,
          content: '',
          titleModal: ''
        }
      }

    }
})

export const { setIsLoading, setError, resetError, setModal, resetModal } = uiSlice.actions;
