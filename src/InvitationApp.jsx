import { Navigate, Route, Routes } from "react-router-dom"
import { InvitationPage } from "./invitation/InvitationPage"
import { SearchPage } from "./search/SearchPage"
import { useGuest } from "./hooks"

export const InvitationApp = () => {

  const { studentId } = useGuest();

  return (
    <Routes>
      {
        studentId
        ? ( 
          <>
            <Route path="/invitation" element={ <InvitationPage /> } />
            <Route path="/*" element={ <Navigate to='/invitation'/>} />
          </>
        )
        : ( 
          <>
            <Route path="/" element={<SearchPage />}/>
            <Route path="/*" element={ <Navigate to='/'/>} />
          </>
        )  
      }
    </Routes>
  )
}
