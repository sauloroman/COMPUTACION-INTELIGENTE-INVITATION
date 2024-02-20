import uaaFooter from '../../assets/images/uaa-image-2.jpg';
import computerImage from '../../assets/images/computer.png';
import { useGuest } from '../../hooks/useGuest';

export const Footer = () => {

  const { invitationOut } = useGuest();

  return (
    <footer className="footer" style={{ backgroundImage: `url(${uaaFooter})`}}>
      <div className="footer__layout"></div>
      <div className="footer__container">
        <div className="footer__box">
          <img className='footer__img' src={ computerImage } alt="Computer icon" />
        </div>
        <h2 className="footer__title gradient-2 text-gradient">Generación</h2>
        <p className="footer__generation">Ago 2019 &mdash; Jun 2024</p>
        <p className="footer__career gradient-1 text-gradient">Ingeniería en Computación Inteligente</p>
        <div className="footer__button">
          <button onClick={ invitationOut } className="btn btn--silver">Buscar otra invitación</button>
        </div>
      </div>
    </footer>
  )
}
