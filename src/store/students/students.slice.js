import { createSlice } from '@reduxjs/toolkit';

export const studentsSlice = createSlice({
    name: 'students',
    initialState: {
      studentsName: [],
    },
    reducers: {
      setStudentsStore: ( state, { payload }) => {
        state.studentsName = [...payload];
      }
    }
})

export const { setStudentsStore } = studentsSlice.actions;
