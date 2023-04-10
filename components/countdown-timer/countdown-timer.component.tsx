import { useState } from 'react';
import { calculateTimeLeft } from '../../utils/calculate_time_left';
import styles from './CountdownTimer.module.scss'

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const totalTimeLeft: number = Object.values(timeLeft).reduce((a: any, b: any) => a + b);
  if (totalTimeLeft > 0) {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
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
