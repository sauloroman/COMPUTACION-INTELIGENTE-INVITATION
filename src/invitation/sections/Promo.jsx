import amigoLogo from '../../assets/images/amigo-logo.png';

export const Promo = () => {
  return (
    <footer className="footer">
      <div className="flex flex-center">
        <img className='footer__logo' src={ amigoLogo } alt="Tu Amigo Invitaciones Logo" />
      </div>
      <div className="footer__content">
        <p className="footer__text">Diseñado por TuAmigoInvitaciones</p>
        <p className='footer__insta'>Instagram: <a href="https://www.instagram.com/tuamigoinvitaciones/">@tuamigoinvitaciones</a></p>
        <div className="flex-right">
          <a className='footer__button btn' target='_blank' href="https://wa.me/4496548073?text=Hola, quiero cotizar una invitación digital 💌">Contáctanos</a>
        </div>
      </div>
    </footer>
  )
}
