import Image from 'next/image'
import styles from './SizingPage.module.scss';


const SizingPage: React.FC = () =>  (
    <div className={styles.sizingPageContainer}>
      <h1>Sizing Charts</h1>
      <h3>Crewneck</h3>
      <div className={styles.imgContainer}>
        <Image fill src={'/sizing-chart-crewneck.jpg'} alt="crewneck chart" />
      </div>
      <h3>Hoodie</h3>
      <div className={styles.imgContainer}>
        <Image fill src={'/sizing-chart-hoodie.jpg'} alt="hoodie sizing chart" />
      </div>
      <h3>Sweatpants</h3>
      <div className={styles.imgContainer}>
        <Image fill src={'/sweatpants-chart.jpg'} alt="sweatpants sizing chart" />
      </div>
      <h3>Tee</h3>
      <div className={styles.imgContainer}>
        <Image fill src={'/sizing-chart-tshirt.jpg'} alt="tshirt sizing chart" />
      </div>
      <h3>Long Sleeve</h3>
      <div className={styles.imgContainer}>
        <Image fill src={'/sizing-chart-long-sleeve.jpg'} alt="long sleeve sizing chart" />
      </div>
      <h3>Shorts</h3>
      <div className={styles.imgContainer}>
        <Image fill src={'/sizing-chart-shorts.jpg'} alt="shorts tshirt sizing chart" />
      </div>
    </div>
);

export default SizingPage;
