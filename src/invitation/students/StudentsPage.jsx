import { Link } from 'react-router-dom';
import studentPageMessage from '../../assets/images/students-page-message.png'
import { useTicket } from '../../hooks/useTicket'

export const StudentsPage = () => {

  const { tickets } = useTicket();

  return (
    <div className="student-page">
      <div className="student-page__container animate__animated animate__fadeIn animate__slower">

        <div className="flex-center">
          <img src={ studentPageMessage } alt="" className="students-page__message" />
        </div>

        <h1 className="students-page__title heading__section text-center">Ingeniería Computación Inteligente</h1>

        <div className="students-page__line"></div>

        <ul className="students-page__list">
          {
            tickets.map( (ticket, i) => (
              <li key={ticket} className="students-page__item">
                <p className="students-page__name">{ ticket }</p>
              </li>
            ))
          }
        </ul>
        
        <div className="students-page__line"></div>

      </div>
    </div>
  )
}
