import { useUI } from "../../hooks"

export const Error = () => {

  const { error: { isOpen, errorMessage }} = useUI();

  return (
    <div className={`error ${ isOpen ? 'error__show' : 'error__hide'}`}>
      <div className="error__container">
        <i className='bx bx-info-square error__icon'></i>
        <p className="error__message">{ errorMessage }</p>
      </div>
    </div>
  )
}
