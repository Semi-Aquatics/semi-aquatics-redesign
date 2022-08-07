import EmailForm from "../components/email-form/email-form.component";
import withLayout from "../hocs/withLayout";

import styles from "../styles/Home.module.scss";
// import ReactPlayer from "react-player";
// import SpinningLogo from "../components/spinning-logo/spinning-logo.component";

// Components

const Home: React.FC = ({ }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop className={styles.mainVideo}>
          <source
            src="https://res.cloudinary.com/daf8abic5/video/upload/v1659369952/home-video_l5cqny.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.mainContainer}>
        <h1>Semi Aquatics</h1>
        {/* <div className={styles.spinningLogoContainer}>
        <SpinningLogo />
      </div> */}
        <div className={styles.emailFormContainer}>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
