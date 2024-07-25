import { HeadingSection } from '../components/HeadingSection';
import locationMessage from '../../assets/images/location-message.png'
import lagoDelMaquesImage from '../../assets/images/lago-del-marques.jpg';

export const Location = () => {
  return (
    <section id='location' className="location section-space">
      <div className="location__container">
        <HeadingSection 
          location='start'
          srcMessage={ locationMessage } 
          title="Ubicaciones" 
          widthMessage="30rem"
        />
        <div className="flex">
          <p className="location__type">Recepción del evento</p>
        </div>
        <p className="location__address">Hacienda Nueva, San Ignacio, 20313 Aguascalientes, Ags.</p>
        <p className="location__hour">08:00 PM</p>
        <button className="location__button btn btn--golden">
          <a target='_blank' href="https://maps.app.goo.gl/EwWGedy9AXw2hR8c6">Ver ubicación</a>
        </button>
      </div>
      <div className="location__image" style={{ backgroundImage: `url(${ lagoDelMaquesImage })`}}>
        <div className="location__overlay"></div>
      </div>
      <div className="location__line"></div>
    </section>
  )
}
