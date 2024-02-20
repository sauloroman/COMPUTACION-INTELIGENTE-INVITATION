import { configureStore } from "@reduxjs/toolkit";
import { invitationSlice } from "./invitation/invitation.slice";
import { uiSlice } from "./ui/ui.slice";
import { studentsSlice } from "./students/students.slice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    invitation: invitationSlice.reducer,
    students: studentsSlice.reducer
  }
})