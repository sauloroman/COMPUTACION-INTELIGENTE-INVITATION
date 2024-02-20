import { useUI } from "../../hooks/useUI"
import perga from '../../assets/images/perga.png'

export const Modal = ({ contentModal, titleModal }) => {
  
  const { closeModal } = useUI();

  return (
    <div className="modal animate__animated animate__fadeIn">
      <div className="modal__content">
        <div className="modal__border gradient-1"></div>
        <main className="modal__main">
          <header className="modal__header">
            <h2 className="modal__title gradient-1 text-gradient">{ titleModal }</h2>
            <i onClick={ closeModal } className='bx bx-x icon icon--modal'></i>
          </header>
          <ul className="modal__list">
            { contentModal.map( studentName => (
              <li className="modal__item">{studentName}</li>  
            )) }
          </ul>
          <figure className="modal__figure">
            <img src={ perga } alt="Perga image" className="modal__img" />
          </figure>
        </main>
      </div>
    </div>
  )
}
