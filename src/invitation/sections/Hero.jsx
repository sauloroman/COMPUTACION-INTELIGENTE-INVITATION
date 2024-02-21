import cornerImage from '../../assets/images/corner-1.png';
import lightImage from '../../assets/images/light-2.png';
import birrete from '../../assets/images/birrete-golden.png';
import pergamine from '../../assets/images/perga.png';
import borderImage from '../../assets/images/coronete.png';
import { useGuest } from '../../hooks';

export const Hero = () => {

  const { studentName } = useGuest();

  return (
    <section className="hero" id='hero'>
      <div className="gradient-1 hero__color animate__animated animate__fadeInDown">
        <div className="hero__content">
          <div className="hero__box">
            <figure className='hero__birrete'>
              <img className='hero__birrete--1' src={ birrete } alt="Golden birrete" />
              <img className='hero__birrete--2' src={ pergamine } alt="Golden birrete" />
            </figure>
            <h1 className='text-gradient gradient-1 hero__congratulation'>Felicidades</h1>
            <h2 className='hero__name'>{ studentName }</h2>
            <p className='hero__career text-gradient gradient-1'>Ing. Computación Inteligente</p>
            <figure className="hero__flowers">
              <img src={borderImage} alt="Flowers image" />
            </figure>
            <p className="hero__generation">26 / Julio / 2024</p>
          </div>
        </div>
        <div className="hero__corner hero__corner--1">
          <img src={ cornerImage } alt="Corner image" />
        </div>
        <div className="hero__corner hero__corner--2">
          <img src={ cornerImage } alt="Corner image" />
        </div>
        <div className="hero__light hero__light--1">
          <img src={ lightImage } alt="Corner image" />
        </div>
        <div className="hero__light hero__light--2">
          <img src={ lightImage } alt="Corner image" />
        </div>
      </div>
    </section>
  )
}
