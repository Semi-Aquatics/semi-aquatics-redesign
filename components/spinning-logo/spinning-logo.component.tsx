import Image from 'next/image';

import styles from './SpinningLogo.module.scss';
// TODO: FIX
// import MainLogo from '../../public/Main-Logo.png'

const SpinningLogo = () => (
  <div className={styles.spinningLogoContainer}>
    {/* <Image src={"https://cdn.shopify.com/s/files/1/0276/3305/7867/files/big3_1410x.png?v=1575617303"} alt="Main Logo" width={200} height={200} /> */}
    <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/big3_1410x.png?v=1575617303" alt="Main Logo" />
  </div>
);

export default SpinningLogo;
