import logoGraduation from '../assets/images/cover-login.png';
import backgroundPaper from '../assets/images/background.png';
import paintBlack from '../assets/images/paint-1.png';
import paintPink from '../assets/images/paint-2.png';
import paintBlue from '../assets/images/paint-3.png';
import paintGolden from '../assets/images/light-1.png';
import { useForm, useGuest, useUI } from '../hooks';
import { Error } from './components/Error';

const formData = {
  studentId: ''
}

export const SearchPage = () => {

  const { studentId, onInputChange, onResetForm } = useForm( formData );
  const { error, isLoading, createError } = useUI();
  const { invitationOf } = useGuest();

  const onSearchGuest = async ( e ) => {
    e.preventDefault();

    if ( studentId.trim().length !== 4  ) {
      createError('La clave debe contener 4 caracteres')
      return;
    };

    await invitationOf( studentId );
    onResetForm();
  }

  return (
    <div className='search'  style={{ backgroundImage: `url( ${backgroundPaper} )` }}>
      <section className="search__content">
        <div className="search__generation">
          <h2 className='search__congratulations text-gradient gradient-1 animate__animated animate__slideInDown'>Feliz graduación</h2>
        </div>
        <figure className="search__logo animate__animated animate__slideInUp">
          <img className='search__image' src={ logoGraduation } alt="Logo Graduation" />
        </figure>
        <form onSubmit={ onSearchGuest } className='search__form form'>
          <div className="form__field animate__animated animate__slideInLeft">
            <label className='form__label search__label' htmlFor="studentId">Introduce tu clave</label>
            <input 
              name='studentId'
              value={ studentId }
              onChange={ onInputChange }
              placeholder='Tu clave'
              id='studentId'
              className='form__input search__input'
              type="text"  
            />
            { error.hasError && <Error message={ error.errorMessage } />}
          </div>
          <input value={ !isLoading ? "Buscar mi invitación" : "Cargando..." } type='submit' className='search__button btn btn--search animate__animated animate__slideInRight' />
        </form>
        <div className="search__paint search__paint--1">
          <img className='search__paint-img' src={ paintBlack } alt="Black ballons" />
        </div>
        <div className="search__paint search__paint--2">
          <img className='search__paint-img' src={ paintPink } alt="Black ballons" />
        </div>
        <div className="search__paint search__paint--3">
          <img className='search__paint-img' src={ paintBlue } alt="Black ballons" />
        </div>
        <div className="search__paint search__paint--4">
          <img className='search__paint-img' src={ paintGolden } alt="Black ballons" />
        </div>
      </section>
    </div>
  )
} 
