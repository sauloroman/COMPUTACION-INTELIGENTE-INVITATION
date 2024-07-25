import { HeadingSection } from "../components/HeadingSection"
import dressImage from '../../assets/images/dress-message.png'
import itineraryBg from '../../assets/images/itinerary-bg.png'
import dressIcon from '../../assets/images/dress-icon.png'

export const DressCode = () => {
  return (
    <section id="dress" className="dress section-space" style={{ backgroundImage: `url(${itineraryBg})`}}>
      <div className="dress__container">
        <HeadingSection 
          srcIcon={ dressIcon}
          srcMessage={ dressImage }
          title="Codigo de Vestimenta"
        />
        <div className="dress__text">Tú eres el alma de la fiesta. Recuerda lucir tan espectacular para este momento.</div>
      </div>
    </section>
  )
}
