import heroMessage from '../../assets/images/hero-message.png';
import heroMessage2 from '../../assets/images/hero-message-2.png';
import { useTicket } from '../../hooks';

export const Hero = () => {

  const { ticket: { name }} = useTicket();
  const [ firstName, , lastName ] = name.split(' ');

  return (
    <section className="hero animate__animated animate__fadeIn animate__slower" id='hero'>
      <div className="hero__container">
        <div className="flex-center">
          <img src={ heroMessage } alt="Computacion Inteligente" className="hero__message" />
        </div> 
        <p className="hero__name">{`${firstName} ${lastName}`}</p>
        <p className="hero__text">Con cariño quiero invitarte a<br /> mi graduación</p>
        <p className="hero__date">26.07.24</p>
        <div className="flex-center">
          <p className="hero__hour">Hora <span>08:00</span> PM</p>
        </div>
        <div className="hero__location">Lago del Marqués</div>
        <div className="hero__address">Hacienda Nueva, San Ignacio, <br />Aguascalientes, Ags</div>

        <div className="flex-center">
          <img src={ heroMessage2 } alt="Muchas Felicidades texto" className="hero__message--2" />
        </div>

        <div className="hero__line"></div>
      </div>
    </section>
  )
}
