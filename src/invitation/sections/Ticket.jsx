import { useGuest } from "../../hooks"
import waveImage from '../../assets/images/wave.gif';
import backgroundImagePapers from '../../assets/images/light-1.png'

export const Ticket = () => {

  const { studentName, studentGuests } = useGuest();

  return (
    <section className="ticket section-space" style={{ backgroundImage: `url(${ backgroundImagePapers })`}}>
      <p className="ticket__title gradient-2 text-gradient">Esta invitación es para ti</p>
      <div className="ticket__container">
        <div className="ticket__border gradient-1"></div>
        <div className="ticket__content" style={{ backgroundImage: `url(${ waveImage })`}}>
          <p className="ticket__name gradient-2 text-gradient">{ studentName }</p>
          <p className="ticket__number">{ studentGuests } <span>pases</span></p>
        </div>
      </div>
      <p className="ticket__text">Me hará muy feliz poder compartir este momento contigo</p>
    </section>
  )
}
