import { Navigate, Route, Routes } from "react-router-dom"
import { InvitationPage } from "./invitation/InvitationPage"
import { SearchPage } from "./search/SearchPage"
import { useGuest, useUI } from "./hooks"
import { useEffect } from "react"
import { Spinner } from "./search/components/Spinner"

export const InvitationApp = () => {

  const { studentId, reloadStudent } = useGuest();
  const { isLoading } = useUI();

  useEffect(() => {
    reloadStudent();
  }, []);

  return (
    <> 
      { isLoading && <Spinner/>  }
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
        <Route path="/*" element={ <Navigate to='/' />}/>
      </Routes>
    </>
  )
}
