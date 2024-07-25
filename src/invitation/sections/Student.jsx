import { Link } from 'react-router-dom';
import { HeadingSection } from '../components/HeadingSection';
import { useTicket } from '../../hooks';

import studentLeaf from '../../assets/images/student-leaf.png'
import studentMessage from '../../assets/images/student-message.png';

export const Student = () => {

  const { ticket: { name } } = useTicket();

  return (
    <main id='tickets' className="student section-space">
      <div className="student__container mb-4">
        <HeadingSection srcIcon={ studentLeaf } srcMessage={ studentMessage } title="Solo para tí" />
        <div className="flex-center">

        <p className="student__name">{ name }</p>
        </div>
        <p className="student__text"> Hoy celebramos tu graduación, un sueño hecho realidad. ¡Felicidades! Que tu título te lleve a alcanzar grandes metas y hacer un impacto positivo en el mundo.</p>
        <div className="flex-center">
          <Link to='/ticket' className='btn btn--golden'>
            Ver boletos digitales
          </Link>
        </div>
      </div>
    </main>
  )
}
