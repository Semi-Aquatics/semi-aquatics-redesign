import { useSelector } from 'react-redux';
import withLayout from '../hocs/withLayout';

import styles from '../styles/Home.module.scss'

// Components

const Home: React.FC = ({}) => {
  const state = useSelector(state => state);
  return (
    <div className={styles.homeContainer}>
      <div>
        <video 
          src="https://player.vimeo.com/external/387521257.hd.mp4?s=6326a358c5982b3a616151006c096c2e01ed96f6&amp;profile_id=175" 
          playsInline autoPlay muted loop 
          data-fluid-aspect-ratio="1.6296296296296295" 
          className={styles.animation} >
        </video>
      </div>
    </div>
  )
}

export default withLayout(Home);

