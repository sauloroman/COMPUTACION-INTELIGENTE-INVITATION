import { Link } from 'react-router-dom';
import { HeadingSection } from '../components/HeadingSection';
import studentImage from '../../assets/images/students-message.png'
import schoolImage from '../../assets/images/uaa-image-2.jpg'

export const Students = () => {

  return (
    <section id='students' className='students'>
      <div className="students__container">
        <div className="students__top"></div>
        <HeadingSection 
          title="Tus compañeros" 
          titleColor="#000" 
          titleWeight={700} 
          srcMessage={ studentImage }
        />
        <p className="students__text">Tu esfuerzo dió frutos. Aquellos que pasaron por las mismas dificultades que tú merecen el mismo reconocimiento.</p>
        <div className="students__line"></div>
        <div className="flex-center">
          <Link to="/students" className='students__button btn btn--black'>Ver Graduados</Link>
        </div>
      </div>
      <div 
        className="students__image" 
        style={{ backgroundImage: `url(${schoolImage})`}}
      >
        <div className="students__overlay"></div>
      </div>
      <div className="students__lineBigger"></div>
    </section>
  )
}
