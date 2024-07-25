import { useTicket, useUI } from "../../hooks"
import { Modal } from "../components/Modal";

import lagoDelMarquesMessage from '../../assets/images/lago-del-marques-message.png'
import boletosMessage from '../../assets/images/boletos-message.png';
import boletosLowMessage from '../../assets/images/boleto-info.png'

const TableList = ( { tables } ) => {
  const tablesArr = tables.split(', ');

  return (
    <ul>
      {
        tablesArr.map( table => (
          <li key={ table } className="ticket__type"><span>Mesa:</span> {table}</li>
        ))
      }
    </ul>
  )
}

export const TicketPage = () => {

  const { modal: { isOpen }, showModal } = useUI();
  const { ticket } = useTicket();
  const { qrCode, name, table, adultsQuantity, kidsQuantity, adultsCounter, kidsCounter, keyPass } = ticket;

  return (
    <>
      { isOpen && <Modal /> }
      <div className="ticket animate__animated animate__fadeInLeft animate__slow">
        <div className="ticket__container">
          <header className="ticket__header">
            <p className="ticket__top">RSVP</p>
            <p className="ticket__name">{name}</p>
          </header>
          <p className="ticket__dire">Presenta este código al llegar a <br /> recepción de tu evento <br /></p>
          <p className="ticket__dire">Este código es valido por la cantidad de boletos <br /> comprados y se actualiza al ser escaneado</p>
          <div className="ticket__place">
            <p className="ticket__hour">26. 07. 24</p>
            <img src={ lagoDelMarquesMessage } alt="Lago del Marques Image" className="ticket__location" />
            <p className="ticket__dire">Hacienda Nueva, San Ignacio, 20313 <br /> Aguascalientes, Ags.</p>
          </div>
          <div className="ticket__info">
            <div className="ticket__left">
              <div className="flex-center">
                <img className="ticket__left-message" src={boletosMessage} alt="Boletos" />
              </div>
              { table === '0' ? "Por asignar" : <TableList tables={table}/>}
              <div className="ticket__numbers">
                <div className="ticket__box">
                  <p className="ticket__concept">Adultos</p>
                  <p className="ticket__number">{ adultsQuantity - adultsCounter }</p>
                </div>
                <div className="ticket__box">
                  <p className="ticket__concept">Infantes</p>
                  <p className="ticket__number">{ kidsQuantity - kidsCounter }</p>
                </div>
              </div>
            </div>
            <div className="flex-right">
              <img className="ticket__qr" src={ qrCode } alt="Qr Code" />
            </div>
          </div>
          <div className="ticket__low">
            <img src={ boletosLowMessage } className="ticket__aditional" alt="Boletos adicional" />
            <p className="ticket__folio">Folio: <span>{ keyPass }</span></p>
            <p onClick={ showModal } className="ticket__tables">Ver Acomodo de Mesas</p>
            <div className="flex-right">
              <div className="ticket__line"></div>
            </div>
            <p className="ticket__career">Ing. Computación Inteligente</p>
          </div>
        </div>
      </div>
    </>
  )
}
