import partyImage from '../../assets/images/event.jpg'
import welcomeImage from '../../assets/images/welcome.svg';
import dinnerImage from '../../assets/images/dinner.svg';
import listImage from '../../assets/images/list.svg';
import cupImage from '../../assets/images/cups.svg';
import chascasImage from '../../assets/images/chascas.svg';
import dancingImage from '../../assets/images/party.svg';
import byeImage from '../../assets/images/bye.svg';

export const Event = () => {
  return (
    <section className="event section-space" style={{ backgroundImage: `url(${partyImage})`}}>
      <div className="event__layout"></div>
      <div className="event__content container">
        <h2 className="event__title heading-section gradient-1 text-gradient">Programa</h2>
        <p className="event__text">Dale seguimiento a cada amenidad de tu evento y no te pierdas de nada.</p>

        <ul className="event__grid">
          <li className="event__card">
            <span className="event__card-number">1</span>
            <div className="event__card-box">
              <img src={ welcomeImage } alt="Welcome image" className="event__card-icon" />
            </div>
            <div className="event__card-content">
              <p className="event__card-hour gradient-1 text-gradient">8:30 PM</p>
              <p className="event__card-description">Inicio del evento</p>
              <p className="event__card-description">Recepción</p>
              <p className="event__card-description">Coctelería</p>
            </div>
          </li>
          <li className="event__card">
            <span span className="event__card-number">2</span>
            <div className="event__card-box">
              <img src={ dinnerImage } alt="Welcome image" className="event__card-icon" />
            </div>
            <div className="event__card-content">
              <p className="event__card-hour gradient-1 text-gradient">10:00 PM</p>
              <p className="event__card-description">Cena</p>
            </div>
          </li>
          <li className="event__card">
            <span span className="event__card-number">3</span>
            <div className="event__card-box">
              <img src={ listImage } alt="Welcome image" className="event__card-icon" />
            </div>
            <div className="event__card-content">
              <p className="event__card-hour gradient-1 text-gradient">11:00 PM</p>
              <p className="event__card-description">Pase de lista</p>
            </div>
          </li>
          <li className="event__card">
            <span span className="event__card-number">4</span>
            <div className="event__card-box">
              <img src={ cupImage } alt="Welcome image" className="event__card-icon" />
            </div>
            <div className="event__card-content">
              <p className="event__card-hour gradient-1 text-gradient">11:10 PM</p>
              <p className="event__card-description">Brindis para graduados</p>
              <p className="event__card-description">Inicio de baile (se abre la pista)</p>
            </div>
          </li>
          <li className="event__card">
            <span span className="event__card-number">5</span>
            <div className="event__card-box">
              <img src={ chascasImage } alt="Welcome image" className="event__card-icon" />
            </div>
            <div className="event__card-content">
              <p className="event__card-hour gradient-1 text-gradient">01:30 AM</p>
              <p className="event__card-description">Chascas</p>
            </div>
          </li>
          <li className="event__card">
            <span span className="event__card-number">6</span>
            <div className="event__card-box">
              <img src={ dancingImage } alt="Welcome image" className="event__card-icon" />
            </div>
            <div className="event__card-content">
              <p className="event__card-hour gradient-1 text-gradient">02:30 AM</p>
              <p className="event__card-description">Termina DJ</p>
              <p className="event__card-description">Inicia Banda</p>
            </div>
          </li>
          <li className="event__card">
            <span span className="event__card-number">7</span>
            <div className="event__card-box">
              <img src={ byeImage } alt="Welcome image" className="event__card-icon" />
            </div>
            <div className="event__card-content">
              <p className="event__card-hour gradient-1 text-gradient">03:30 AM</p>
              <p className="event__card-description">Fin del Evento</p>
            </div>
          </li>
        </ul>

      </div>
    </section>
  )
}
