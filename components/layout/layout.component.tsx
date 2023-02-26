import { useRef, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Fade from "../../hooks/fade";

import styles from './Layout.module.scss'
import Navbar from '../navbar/navbar.component'
import NavbarOptions from '../navbar-options/navbar-options.component'
import Sidebar from '../sidebar/sidebar.component';
import SpinningLogo from '../spinning-logo/spinning-logo.component';
import CountdownTimer from '../countdown-timer/countdown-timer.component';
import { calculateTimeLeft } from '../../utils/calculate_time_left';
// import { setPasswordGuessed } from '../../redux/user/user.actions';

const Layout: React.FC = (props) => {
    const router = useRouter();
    // setPasswordGuessed(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const typeOfPage = router.pathname.substring(1);

    const DROP_DATE = new Date("2023/03/06 18:00:00 EST");

    const [isTimeLeft, setIsTimeLeft] = useState(true);
    console.log(isTimeLeft)
    return (
      <div className={styles.layoutContainer}>
            <Head>
                <title>Semi Aquatics</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Navbar title={typeOfPage} setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} setSidebarOpen={setSidebarOpen} />
            {
              navbarOpen &&
              <Fade show={navbarOpen}>
                  <NavbarOptions setNavbarOpen={setNavbarOpen}/>
              </Fade>
            }
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          {/* @ts-ignore */}
          <div>
            {props.children}
          </div>
          {
          <div className={`${styles.spinningLogoContainer} ${isTimeLeft ? styles.countdown : ''}`}>
              {
                isTimeLeft ?
                    <CountdownTimer dropDate={DROP_DATE} setIsTimeLeft={setIsTimeLeft}/>
                  :
                    <SpinningLogo />
                }
              </div>
          }
          <script src="https://cdn.attn.tv/semiaquatics/dtag.js"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154479709-1"></script>
        </div>
    );
};

export default Layout;
