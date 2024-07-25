import { useState, useEffect } from 'react';
import { HeadingSection } from '../components/HeadingSection';
import timerMessage from '../../assets/images/timer-message.png';
import timerLeaf from '../../assets/images/timer-leaf.png'

export const Timer = () => {

  const [targetDate, setTargetDate] = useState( Math.ceil((new Date('07/26/2024 20:00').getTime() - new Date()) * 0.001) );
  const [timeData, setTimeData] = useState({
    days:     0,
    hours:    0,
    minutes:  0,
    seconds:  0
  })

  useEffect( () => {
    setInterval( () => setTargetDate( Math.ceil((new Date('07/26/2024 20:00').getTime() - new Date()) * 0.001) ), 1000)
  }, []);

  useEffect( () => {
    let temp = 0

    let days = ( targetDate / 86400).toString().split('.');
    temp = Number((`.` + days[1]).slice(0, 6)).toFixed(6);
    days = days[0];

    let hours = (temp * 24).toString().split('.');
    temp = Number((`.` + hours[1]).slice(0, 6)).toFixed(6);
    hours = hours[0];

    let minutes = (temp * 60).toString().split('.');
    temp = Number((`.` + minutes[1]).slice(0, 6)).toFixed(6);
    minutes = minutes[0];

    let seconds = (temp * 60).toString().split('.');
    seconds = seconds[0];

    setTimeData({
      days,
      hours,
      minutes,
      seconds
    });
  }, [targetDate]);

  return (
    <>
      <section id='timer' className="timer section-space">
        <div className="timer__container container">
          <div className="flex-left timer__top"></div>
          <HeadingSection srcMessage={ timerMessage } title="La cuenta regresiva" titleColor='#000' titleWeight={ 700 } />
          <div className="flex-center">
            <div className="timer__date">26 de Julio, 2024</div>
          </div>
          <div className="timer__flex">
            <div className="timer__box">
              <p className="timer__number">{ `${timeData.days}`.padStart(2, '0')}</p>
              <p className='timer__type'>D</p>
            </div>
            <p className="timer__sign">:</p>
            <div className="timer__box">
              <p className="timer__number">{ `${timeData.hours}`.padStart(2, '0')}</p>
              <p className='timer__type'>H</p>
            </div>
            <p className="timer__sign">:</p>
            <div className="timer__box">
              <p className="timer__number">{ `${timeData.minutes}`.padStart(2, '0')}</p>
              <p className='timer__type'>M</p>
            </div>
            <p className="timer__sign">:</p>
            <div className="timer__box">
              <p className="timer__number">{ `${timeData.seconds}`.padStart(2, '0')}</p>
              <p className='timer__type'>S</p>
            </div>
          </div>
          <p className="timer__text">Contamos cada segundo hasta el inicio de tu fiesta. <br />Un momento para recordar.</p>
          <div className="flex-right">
            <img src={ timerLeaf } alt="Timer leaf" className="heading-section__icon timer__leaf" />
          </div>
        </div>
      </section>
      <div className="timer__line"></div>
    </>
  )
}
