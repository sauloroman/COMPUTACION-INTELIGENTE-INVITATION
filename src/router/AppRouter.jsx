import { Navigate, Route, Routes } from "react-router-dom";
import { useGuest } from "../hooks"
import { InvitationPage } from "../invitation/InvitationPage";
import { SearchPage } from '../search/SearchPage';
import { useEffect } from "react";
import { NotFound } from "../search/NotFound";

export const AppRouter = () => {

  const { studentId, reloadStudent } = useGuest();

  useEffect(() => {
    reloadStudent();
  }, []);
  
  return (
    <Routes>
      {
        studentId
        ? (
          <>
            <Route path="/invitation" element={<InvitationPage />} />
            <Route path="/*" element={<NotFound />}/>
          </>
        )
        : (
          <>
            <Route path="/" element={<SearchPage /> } />
            <Route path="/*" element={<NotFound />}/>
          </>
        ) 
      }
      <Route path="/*" element={<Navigate to='/' />}/>
    </Routes>
  )
}
