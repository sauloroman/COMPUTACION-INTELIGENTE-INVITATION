import elegantPattern from '../../assets/images/pattern-elegant.png';
import manImage from '../../assets/images/man-dress.webp';
import womanImage from '../../assets/images/woman-dress.webp';

export const DressingCode = () => {
  return (
    <section className="section-space dressing">
      <div className="dressing__layout" style={{ backgroundImage: `url(${ elegantPattern })`}}></div>
      <div className="dressing__container container">
        <h2 className="dressing__title heading-section gradient-1 text-gradient">Código de vestimenta</h2>
        <p className='dressing__code'>Formal</p>

        <div className="dressing__grid">
          <div className="dressing__section">
            <div className="dressing__imageBox">
              <img className='dressing__image' src={ manImage } alt="Man Image" />
            </div>
            <div className="dressing__text">Traje y Corbata</div>
          </div>
          <div className="dressing__section">
            <div className="dressing__imageBox">
              <img className='dressing__image' src={ womanImage } alt="Woman Image" />
            </div>
            <div className="dressing__text">Vestido Largo</div>
          </div>
        </div>
      </div>
    </section>
  )
}
