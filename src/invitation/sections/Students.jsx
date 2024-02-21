import { useEffect } from 'react';
import birrete from '../../assets/images/icon.png'
import decorationGraduated from '../../assets/images/decoration-graduated.png'
import lightImage from '../../assets/images/light-2.png';
import { Slider } from '../components/Slider'
import { useGuest, useUI } from '../../hooks'

export const Students = () => {

  const { showModal } = useUI();
  const { studentsName, getStudents } = useGuest();

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <section className='students__section'>
      <div className="students__lightBox students__lightBox--1">
        <img className='students__light' src={ lightImage } alt="Light image" />
      </div>
      <div className="students__lightBox students__lightBox--2">
        <img className='students__light' src={ lightImage } alt="Light image" />
      </div>
      <div className="container section-space students">
        <div className="students__content">
          <header className="students__header">
            <div className="students__logo-box">
              <img src={birrete} alt="Birrete" className='students__logo' />
            </div>
            <h2 className="students__title heading-section gradient-1 text-gradient text-center">Tus compañeros también lo lograron</h2>
            <figure className="students__image">
              <img className='students__img' src={ decorationGraduated } alt="Decoration" />
            </figure>
          </header>
          <Slider studentsName={ studentsName } />
          <figure className="students__image">
            <img className='students__img' src={ decorationGraduated } alt="Decoration" />
          </figure>
        </div>
        <footer className="students__footer">
          <button onClick={ () => showModal( studentsName, 'Los Egresados' ) } className='btn btn--silver gradient-2'>Ver Graduados</button>
        </footer>
      </div>
    </section>
  )
}
