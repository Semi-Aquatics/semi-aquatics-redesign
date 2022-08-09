import styles from './Sidebar.module.scss'

// Packages
import { GrClose } from 'react-icons/gr'
import { FaInstagram } from 'react-icons/fa'
import { Dispatch, SetStateAction, } from 'react';
import Link from 'next/link';
import { useRef } from 'react'


// Hooks
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import EmailForm from '../email-form/email-form.component';

interface SidebarProps {
  sidebarOpen: boolean,
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar: React.FC <SidebarProps> = ({sidebarOpen, setSidebarOpen}) =>  {
    const ref = useRef();
    useOnClickOutside(ref, () => setSidebarOpen(false));
    return (
      // @ts-ignore
    <div className={`${styles.sidebarContainer} ${!sidebarOpen ? styles.sidebarContainerClosed : ''}`} ref={ref}>
            <button className={styles.closeMenuToggle} onClick={() => setSidebarOpen(false)}>
                <GrClose />
            </button>
        <div className={styles.sidebarWrapper}>
            <div className={styles.innerContainer}>
                <Link href="/">
                    <p onClick={() => setSidebarOpen(false)}>Home</p>
                </Link>
                <Link href="/drop">
                    <p onClick={() => setSidebarOpen(false)}>Drop</p>
                </Link>
                <Link href="/story">
                    <p onClick={() => setSidebarOpen(false)}>Story</p>
                </Link>
                <Link href="/archive">
                    <p onClick={() => setSidebarOpen(false)}>Archive</p>
                </Link>
                <span className={styles.flexGrow}></span>
                <div className={styles.bottomNavbar}>
                  <div className={styles.emailFormContainer}>
                    <EmailForm isSidebar={true}/>
                  </div>
                  <div className={styles.flexer} >
                    <a>
                      <FaInstagram />
                    </a>
                  <a href='mailto:info@semiaquatics.com' className={styles.footerEmail}>info@semiaquatics.com</a>
                  </div>
                  <h6 className="footer-item">© 2022 Semi Aquatics</h6>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sidebar;
