import EmailForm from "../components/email-form/email-form.component";
import withLayout from "../hocs/withLayout";

import styles from "../styles/Home.module.scss";


const Home: React.FC = ({ }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop className={styles.mainVideo}>
          <source
            src="https://res.cloudinary.com/daf8abic5/video/upload/v1659977833/video-semi-aquatics_oqkd2d.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.mainContainer}>

        <div className={styles.emailFormContainer}>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
