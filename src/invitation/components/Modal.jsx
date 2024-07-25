import { useUI } from "../../hooks/useUI"
import { useTicket } from "../../hooks";
import croquisMesasImage from '../../assets/images/lago-del-marques-layout.png';
import tablesMessage from '../../assets/images/tables-messages.png';

export const Modal = () => {
  
  const { closeModal } = useUI();
  const { ticket: { table, name, adultsQuantity, adultsCounter, kidsQuantity, kidsCounter, qrCode } } = useTicket();

  return (
    <div className="modal animate__animated animate__fadeIn animate__slow flex-column-center">
      <div className="modal__container">
        <div className="modal__box">
          <header className="modal__header">
            <h2 className="modal__title">Distribución</h2>
            <button onClick={ closeModal } className="btn btn--pink modal__button">Cerrar</button>
          </header>
          <div className="modal__content">
            <div className="flex-center">
              <img src={ tablesMessage } alt="Ubica tu mesa texto" className="modal__message" />
            </div>
            <p className="modal__name">{ name }</p>
            <div className="modal__line"></div>
            <div className="flex-center mb-4">
              <img src={ croquisMesasImage } alt="Imagen de la distribución de mesas para el evento" className="modal__imae" />
            </div>
            <div className="modal__low">
              <div className="modal__information">
                <p className="modal__top">Mesa: <span>{!table ? "Por asignar" : table}</span></p>
                <p className="modal__top">Adultos: <span>{ adultsQuantity - adultsCounter }</span></p>
                <p className="modal__top">Infantes: <span>{ kidsQuantity - kidsCounter }</span></p>
              </div>
              <div className="flex-right">
                <img src={ qrCode } alt="Codigo qr small" className="modal__qr" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
