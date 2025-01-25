import styles from './Sidebar.module.scss';

// Packages
import { GrClose } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { useRef } from 'react';

// Hooks
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import EmailForm from '../email-form/email-form.component';
import { HELP_EMAIL_LINK, INSTAGRAM_LINK } from '../../constants/external-links';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/drop', label: 'Drop', isNew: false },
  { href: '/story', label: 'Story' },
  { href: '/artists', label: 'Artists' },
];

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const ref = useRef<HTMLDivElement>(null);

  const closeSidebar = () => setSidebarOpen(false);
  useOnClickOutside(ref, closeSidebar);

  return (
    <div
      className={`${styles.sidebarContainer} ${!sidebarOpen ? styles.sidebarContainerClosed : ''}`}
      ref={ref}
    >
      <button className={styles.closeMenuToggle} onClick={closeSidebar}>
        <GrClose />
      </button>
      <div className={styles.sidebarWrapper}>
        <div className={styles.innerContainer}>
          {links.map(({ href, label, isNew }) => (
            <Link href={href} key={href}>
              <p onClick={closeSidebar} className={isNew ? styles.dropLink : ''}>
                {label}
                {isNew && <span className={styles.newDrop}>new!</span>}
              </p>
            </Link>
          ))}
          <span className={styles.flexGrow}></span>
          <div className={styles.bottomNavbar}>
            <div className={styles.emailFormContainer}>
              <EmailForm isSidebar />
            </div>
            <div className={styles.flexer}>
              <a target="_blank" href={INSTAGRAM_LINK} rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={HELP_EMAIL_LINK} className={styles.footerEmail}>
                info@semiaquatics.com
              </a>
            </div>
            <h6 className="footer-item">© {new Date().getFullYear()} Semi Aquatics</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
