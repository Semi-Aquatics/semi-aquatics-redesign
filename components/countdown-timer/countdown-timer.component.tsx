import { CountdownTimerProps } from '../../interfaces/page_interface';
import styles from './CountdownTimer.module.scss'

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeftObj }) => (
  <div className={styles.countdownTimerContainer}>
    {timeLeftObj.days}
    :
    {timeLeftObj.hours}
    :
    {timeLeftObj.minutes}
    :
    {timeLeftObj.seconds}
  </div>
);

export default CountdownTimer;
