import styles from './SizingPage.module.scss';
// @ts-ignore
import crewneck from '../../public/sizing-chart-crewneck.jpg'
// @ts-ignore
import sweatpants from '../../public/sweatpants-chart.jpg';
// @ts-ignore
import shorts from '../../public/sizing-chart-shorts.jpg';
// @ts-ignore
import tShirt from '../../public/sizing-chart-tshirt.jpg';
// @ts-ignore
import hoodie from '../../public/sizing-chart-hoodie.jpg';
// @ts-ignore
import longSleeve from '../../public/sizing-chart-long-sleeve.jpg';

const SizingPage: React.FC = () =>  (
    <div className={styles.sizingPageContainer}>
      <h1>Sizing Charts</h1>
      <h3>Crewneck</h3>
      <img src={crewneck} alt="crewneck chart" />
      <h3>Hoodie</h3>
      <img src={hoodie} alt="hoodie sizing chart" />
      <h3>Sweatpants</h3>
      <img src={sweatpants} alt="sweatpants sizing chart" />
      <h3>Tee</h3>
      <img src={tShirt} alt="tshirt sizing chart" />
      <h3>Long Sleeve</h3>
      <img src={longSleeve} alt="long sleeve sizing chart" />
      <h3>Shorts</h3>
      <img src={shorts} alt="shorts tshirt sizing chart" />
    </div>
);

export default SizingPage;
