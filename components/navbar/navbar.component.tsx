import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link'
import styles from './Navbar.module.scss'

import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';


interface NavbarProps {
    title: string,
    date?: string
    setNavbarOpen: Dispatch<SetStateAction<boolean>>,
    navbarOpen: boolean
}

const Navbar: React.FC<NavbarProps> = ({title, date, setNavbarOpen, navbarOpen}) => {
    const router = useRouter();

    return (
    <div className={styles.navbarContainer}>
        <Link href="/" passHref>
            <h2>Semi Aquatics</h2>
        </Link>
        <div className={styles.cartAndBars}>
            <div className={styles.icon} onClick={() => setNavbarOpen(true)}>
                <HiOutlineMenuAlt4 />
            </div>
            {
                router.pathname !== '/' &&
                <div className={styles.icon}>
                    <FiShoppingCart />
                </div>
            }
        </div>
    </div>
  )
    }

export default Navbar;
