import { createSlice } from '@reduxjs/toolkit';

export const invitationSlice = createSlice({
    name: 'invitation',
    initialState: {
        studentId: null,
        studentGuests: 0,
        studentName: ''
    },
    reducers: {

        setStudentId: ( state, { payload }) => {
            state.studentId = payload;
        },

        setStudentData: ( state, { payload } ) => {
            state.studentGuests = payload.studentGuests;
            state.studentName = payload.studentName;
        },
    }
})

export const { 
    setStudentId,
    setStudentData
} = invitationSlice.actions;
