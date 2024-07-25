import { useUI } from "../../hooks";

export const ButtonsNav = () => {
  const { openMenu, menu: { isOpen } } = useUI();

  return (
    <div className="btn__controls">
      <button onClick={ openMenu } className={`btn btn--small ${ isOpen && 'hide'}`}>
        {
          isOpen 
          ? ( <i className='bx bx-right-arrow-alt btn__icon' ></i> )
          : ( <i className='bx bx-menu btn__icon' ></i> )
        }
      </button>
    </div>
  )
}
