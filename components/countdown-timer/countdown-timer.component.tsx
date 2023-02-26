import { useState } from 'react';
import { calculateTimeLeft } from '../../utils/calculate_time_left';
import styles from './CountdownTimer.module.scss'

interface CountdownTimerProps {
  dropDate: Date,
  setIsTimeLeft: any
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ dropDate, setIsTimeLeft  }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(dropDate));
  const totalTimeLeft: number = Object.values(timeLeft).reduce((a: any, b: any) => a + b);
  if (totalTimeLeft > 0) {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dropDate));
    }, 1000);
  } else{
    setIsTimeLeft(false);
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
