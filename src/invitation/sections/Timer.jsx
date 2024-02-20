import { useState, useEffect } from 'react';
import videoProm from '../../assets/images/video-graduation.gif';

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
    <section className="timer" style={{ backgroundImage: `url(${videoProm})`}}>
      <div className="timer__layout"></div>
      <div className="timer__content">
        <h2 className="timer__title heading-section text-gradient gradient-1">Ya sólo faltan</h2>
        <div className="timer__counter">
          <div className="timer__box">
            <span>{timeData.days <= 9 ? `0${timeData.days}`: timeData.days}</span>
            <p>Días</p>
          </div>
          <div className="timer__box">
            <span>{timeData.hours <= 9 ? `0${timeData.hours}`: timeData.hours}</span>
            <p>Horas</p>
          </div>
          <div className="timer__box">
            <span>{timeData.minutes <= 9 ? `0${timeData.minutes}`: timeData.minutes}</span>
            <p>Minutos</p>
          </div>
          <div className="timer__box">
            <span>{timeData.seconds <= 9 ? `0${timeData.seconds}`: timeData.seconds}</span>
            <p>Segundos</p>
          </div>
        </div>
        <p className="timer__foot gradient-2 text-gradient">Algo inolvidable está a punto de suceder</p>
      </div>
    </section>
  )
}
