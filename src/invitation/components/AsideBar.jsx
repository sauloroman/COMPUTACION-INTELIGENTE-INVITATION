import { useEffect } from "react";
import { useTicket, useUI } from "../../hooks"

export const AsideBar = () => {

  const { menu: { isOpen }, closeMenu } = useUI();
  const { deleteTicket } = useTicket();

  useEffect( () => {
    const body = document.querySelector('.site');
    if ( isOpen ) {
      body.style.opacity = .8;
    } else {
      body.style.opacity = 1;
    }
  }, [ isOpen ])

  return (
    <aside className={`bar ${ isOpen && 'bar--open'}`}>
      <div className="bar__container">
        <header className="bar__header flex-between">
          <p className="heading__section text-golden">Menú</p>
          <i onClick={ closeMenu } className='bx bx-x bar__icon'></i>
        </header>
        <nav className="bar__nav">
          <ul className="bar__list">
            <li className="bar__item">
              <a href="#hero" className="bar__link">Inicio</a>
              <div className="bar__line"></div>
            </li>
            <li className="bar__item">
              <a href="#tickets" className="bar__link">Boletos Digitales</a>
              <div className="bar__line"></div>
            </li>
            <li className="bar__item">
              <a href="#timer" className="bar__link">Cuenta Regresiva</a>
              <div className="bar__line"></div>
            </li>
            <li className="bar__item">
              <a href="#location" className="bar__link">Ubicación</a>
              <div className="bar__line"></div>
            </li>
            <li className="bar__item">
              <a href="#hashtag" className="bar__link">Hashtag</a>
              <div className="bar__line"></div>
            </li>
            <li className="bar__item">
              <a href="#students" className="bar__link">Graduados</a>
              <div className="bar__line"></div>
            </li>
            <li className="bar__item">
              <a href="#itinerary" className="bar__link">Itinerario</a>
              <div className="bar__line"></div>
            </li>
            <li className="bar__item">
              <a href="#dress" className="bar__link">Vestimenta</a>
            </li>
          </ul>
        </nav>
        <div className="flex-center">
          <button onClick={ deleteTicket } className="btn btn--nav">Salir Invitación</button>
        </div>
      </div>
    </aside>
  )
}
