import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { InvitationPage } from "../invitation/InvitationPage";
import { SearchPage } from '../search/SearchPage';
import { useTicket } from "../hooks";
import { TicketPage } from "../invitation/ticket/TicketPage";
import { StudentsPage } from "../invitation/students/StudentsPage";
import { Error } from "../invitation/components/Error";

export const AppRouter = () => {

  const { ticket: { id }, renewTicket } = useTicket();
  
  useEffect(() => {
    renewTicket();
  }, []);
  
  return (
    <>
      <Routes>
        {
          id
          ? (
            <>
              <Route path="/invitation" element={<InvitationPage />} />
              <Route path="/ticket" element={<TicketPage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/*" element={<Navigate to='/invitation' />}/>
            </>
            )
            : (
            <>
              <Route path="/" element={<SearchPage /> } />
              <Route path="/*" element={<Navigate to='/' />}/>
            </>
            ) 
        }
        <Route path="/*" element={<Navigate to='/' />}/>
      </Routes>
     <Error />
    </>
  )
}
