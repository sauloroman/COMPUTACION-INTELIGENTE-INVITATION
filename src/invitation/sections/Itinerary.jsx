import { HeadingSection } from "../components/HeadingSection";
import itineraryMessage from '../../assets/images/itinerary-message.png'
import itinerary1 from '../../assets/images/itinerary-1.png';
import itinerary2 from '../../assets/images/itinerary-2.png';
import itinerary3 from '../../assets/images/itinerary-3.png';
import itinerary4 from '../../assets/images/itinerary-4.png';
import itinerary5 from '../../assets/images/itinerary-5.png';
import itinerary6 from '../../assets/images/itinerary-6.png';

export const Itinerary = () => {
  return (
    <section id="itinerary" className="itinerary section-space">
      <div className="itinerary__container">
        <HeadingSection 
          title='Momentos importantes'
          srcMessage={ itineraryMessage }
        />
        <ol className="itinerary__list">
          <li className="itinerary__item">
            <p className="itinerary__hour">08:30 PM</p>
            <img src={ itinerary1 } alt="Inicio texto" className="itinerary__name" />
            <p className="itinerary__text">Inicio | Recepción | Coctelería</p>
          </li>
          <li className="itinerary__item">
            <p className="itinerary__hour">10:00 PM</p>
            <img src={ itinerary2 } alt="Inicio texto" className="itinerary__name" />
            <p className="itinerary__text">Cena (3 tiempos)</p>
          </li>
          <li className="itinerary__item">
            <p className="itinerary__hour">11:00 PM</p>
            <img src={ itinerary3 } alt="Inicio texto" className="itinerary__name" />
            <p className="itinerary__text">Pase de lista | Brindis | Baile</p>
          </li>
          <li className="itinerary__item">
            <p className="itinerary__hour">01:30 AM</p>
            <img src={ itinerary4 } alt="Inicio texto" className="itinerary__name" />
            <p className="itinerary__text">Comida Express (Chascas)</p>
          </li>
          <li className="itinerary__item">
            <p className="itinerary__hour">02:30 AM</p>
            <img src={ itinerary5 } alt="Inicio texto" className="itinerary__name" />
            <p className="itinerary__text">Termina DJ | Inicia la Banda</p>
          </li>
          <li className="itinerary__item">
            <p className="itinerary__hour">03:30 AM</p>
            <img src={ itinerary6 } alt="Inicio texto" className="itinerary__name" />
            <p className="itinerary__text">Fin del Evento</p>
          </li>
        </ol>
        <div className="flex-right">
          <div className="itinerary__square"></div>
        </div>
      </div>
    </section>
  )
}
