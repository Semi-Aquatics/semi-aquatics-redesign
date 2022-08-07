import { useState } from 'react';
import { CountdownTimerProps } from '../../interfaces/page_interface';
import { calculateTimeLeft } from '../../utils/calculate_time_left';
import styles from './CountdownTimer.module.scss'

const CountdownTimer: React.FC = () => {
  const DROP_DATE = new Date("2022/08/15 17:00:00 EST");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(DROP_DATE));
  const totalTimeLeft: number = Object.values(timeLeft).reduce((a: any, b: any) => a + b);
  if (totalTimeLeft > 0) {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(DROP_DATE));
    }, 1000);
  } else{
    return (<span></span>)
  }

    return (
      <div className={styles.countdownTimerContainer}>
        {timeLeft.days}
        :
        {timeLeft.hours}
        :
        {timeLeft.minutes}
        :
        {timeLeft.seconds}
    </div>
  );
}

export default CountdownTimer;
