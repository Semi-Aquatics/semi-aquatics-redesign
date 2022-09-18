import withLayout from "../hocs/withLayout";
import styles from "../styles/Home.module.scss";
import { useIsMobile } from '../hooks/use-is-mobile';
// @ts-ignore
import homepagePic from '../public/homepage-image.jpg';

const Home: React.FC = ({ }) => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.homeContainer}>
      {
        isMobile ?
          <div className={styles.imageContainer}>
            <img src={homepagePic} alt='semi-aquatics' />
          </div>
        :
          <div className={styles.videoContainer}>
            <video autoPlay muted loop className={styles.mainVideo}>
              <source
                src={require('../public/video-home.mp4')}
                type="video/mp4"
              />
            </video>
          </div>
        }
    </div>
  );
};

export default withLayout(Home);
