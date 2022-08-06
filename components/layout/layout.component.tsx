import { useRef, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Fade from "../../hooks/fade";

import styles from './Layout.module.scss'
import Navbar from '../navbar/navbar.component'
import NavbarOptions from '../navbar-options/navbar-options.component'
import Sidebar from '../sidebar/sidebar.component';
import SpinningLogo from '../spinning-logo/spinning-logo.component';



const Layout: React.FC = (props) => {
    const router = useRouter();
    const ref = useRef();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const typeOfPage = router.pathname.substring(1);

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
            router.pathname !== '/' &&
              <div className={styles.spinningLogoContainer}>
                <SpinningLogo />
              </div>
          }
        </div>
    );
};

export default Layout;
