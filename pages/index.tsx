import EmailForm from '../components/email-form/email-form.component';
import withLayout from '../hocs/withLayout';

import styles from '../styles/Home.module.scss'

// Components

const Home: React.FC = ({}) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.emailFormContainer}>
        <h1>Semi Aquatics</h1>
        <EmailForm />
      </div>
    </div>
  )
}

export default withLayout(Home);

{/* <div className={styles.videoContainer} dangerouslySetInnerHTML={{
  __html: `
  <video style="width: 100%; height: 100%; object-fit: cover;" loop autoplay>
    <source src="/home-video.mp4" type="video/mp4"/>
  </video>
` }}></div> */}
