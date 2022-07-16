import EmailForm from '../components/email-form/email-form.component';
import withLayout from '../hocs/withLayout';

import styles from '../styles/Home.module.scss'

// Components

const Home: React.FC = ({}) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.fishContainer}>
        <div className={styles.fish}>
          <div className={styles.tail}></div>
          <div className={styles.fins}>
            <div className={styles.top}></div>
            <div className={styles.bottom}></div>
            <div className={styles.bottom}></div>
          </div>
          <div className={styles.body}></div>
          <div className={styles.side}></div>
          <div className={styles.eye}></div>
          <div className={styles.bubbles}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
        </div>
        </div>
      </div>
      <div className={styles.emailFormContainer}>
        <EmailForm />
      </div>
    </div>
  )
}

export default withLayout(Home);

{/* <div className={styles.homeContainer} dangerouslySetInnerHTML={{
  __html: `
        <video style="width: 100%" loop autoplay>
          <source src="/home-video.mp4" type="video/mp4"/>
        </video>
      ` }}></div> */}
