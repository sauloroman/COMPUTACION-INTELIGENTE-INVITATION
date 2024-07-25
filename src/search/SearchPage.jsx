import { useState } from 'react';
import loginMessage from '../assets/images/hero-message.png';
import { useForm, useTicket } from '../hooks';

const formData = {
  keyPass: ''
}

const formValidations = {
  keyPass: [ value => value.length > 0, 'La clave es necesaria']
}

export const SearchPage = () => {

  const { keyPass, keyPassValid, onInputChange, onResetForm, isFormValid } = useForm( formData, formValidations );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { getTicket } = useTicket();

  const onSearchTicket = ( e ) => {
    e.preventDefault();
    setIsFormSubmitted( true );

    if ( !isFormValid ) return;

    getTicket( keyPass )

    setIsFormSubmitted( false );
    onResetForm();
  }

  return (
    <div className='search'>
      <div className="search__container animate__animated animate__fadeIn animate__slower">
        <p className="heading__section text-white search__text">Nuestra Graduación</p>
        <div className="flex-center">
          <div className="search__line"></div>
        </div>
        <div className="flex-center">
          <img src={ loginMessage } alt="" className="search__image" />
        </div>
        <div className="flex-center">
          <div className="search__line"></div>
        </div>
        <p className="heading__section search__text mt-2">Celebra con nosotros</p>
        <p className="search__dire">Ingresa tu clave de invitación para buscar tus pases digitales</p>

        <form onSubmit={ onSearchTicket } className="form search__form">
          <div className="form__field">
            <label 
              htmlFor="keyPass" 
              className="form__label">
              <p>Clave</p>
              <span
                className={`form__span ${
                  !isFormValid && isFormSubmitted ? 'text-wrong' : null
                }`}
              >
                {keyPassValid}
              </span>
            </label>
            <input 
              onChange={ onInputChange }
              name='keyPass'
              value={keyPass}
              id='keyPass' 
              type="text" 
              className="form__input" 
            />
          </div>
          <div className="search__button">
            <button type='submit' className="btn btn--golden">Comenzar Busqueda</button>
          </div>
        </form>
      </div>
    </div>
  )
} 
