import EmailForm from "../components/email-form/email-form.component";
import withLayout from "../hocs/withLayout";
import styles from "../styles/Home.module.scss";
import { useIsMobile } from '../hooks/use-is-mobile';


const DESKTOP_VIDEO_URL = "https://res.cloudinary.com/daf8abic5/video/upload/v1659977833/video-semi-aquatics_oqkd2d.mp4";
const MOBILE_VIDEO_URL = "https://res.cloudinary.com/daf8abic5/video/upload/v1661203772/video-semi-aquatics-mobile_baap1g.mp4";

const Home: React.FC = ({ }) => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.homeContainer}>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop className={styles.mainVideo}>
          <source
            src={isMobile ? MOBILE_VIDEO_URL : DESKTOP_VIDEO_URL}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default withLayout(Home);
