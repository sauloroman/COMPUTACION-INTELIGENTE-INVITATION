import { useNavigate } from "react-router-dom"
import { useGuest } from "../hooks";

export const NotFound = () => {
  
  const navigate = useNavigate();
  const { studentId } = useGuest();

  const onNavigatePage = () => {

    if ( studentId ) {
      navigate('/invitation', { replace: true })
      return;
    }
    
    navigate('/', { replace: true })

  }

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__number">404</h1>
        <p className="not-found__text">Página no encontrada</p>
        <button className="btn btn--silver gradient-1 not-found__button" onClick={ onNavigatePage }>Regresar</button>
      </div>
    </div>
  )
}
