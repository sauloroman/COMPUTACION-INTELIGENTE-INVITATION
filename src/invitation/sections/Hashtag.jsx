import { HeadingSection } from '../components/HeadingSection'
import hashtagIcon from '../../assets/images/hashtag-icon.png'
import hashtagMessage from '../../assets/images/hashtag-message.png'

export const Hashtag = () => {
  return (
    <section id='hashtag' className="hashtag">
      <div className="hashtag__container">
        <div className="flex-right hashtag__top">
          <div className="hashtag__square"></div>
        </div>
        <HeadingSection 
          srcIcon={ hashtagIcon }
          iconWidth='6rem'
          srcMessage={ hashtagMessage }
        />
        <p className="hashtag__text">Comparte tus recuerdos en Instagram con el hashtag de nuestra graduación</p>
        <p className="hashtag__hash">#ComputacionInteligenteProm</p>
        <div className="hashtag__square"></div>
      </div>
    </section>
  )
} 
