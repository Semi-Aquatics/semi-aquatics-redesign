import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link'
import styles from './Navbar.module.scss'

import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { useQuery } from '@apollo/client';

import { useCookies } from 'react-cookie';
import { getCartQuery } from '../../services/queries/queries';
import { getCartCounts } from '../../utils/cartHelper';


interface NavbarProps {
    title: string,
    date?: string
    setNavbarOpen: Dispatch<SetStateAction<boolean>>,
    setSidebarOpen: Dispatch<SetStateAction<boolean>>,
    navbarOpen: boolean
}

const Navbar: React.FC<NavbarProps> = ({title, date, setNavbarOpen, navbarOpen, setSidebarOpen}) => {
    const router = useRouter();
    const [cookies, setCookie] = useCookies(['cartId']);
    const cart = useQuery(getCartQuery, { variables: { cartId: cookies.cartId } });

    const isHomePage = router.pathname === '/';
    let itemCount = 0;
    if(cart && cart.data && cart.data.cart){
      const cartCounts: Number[] = (Object.values(getCartCounts(cart)));
      // @ts-ignore
      itemCount = cartCounts.reduce((acc: number, curr: number) => acc + curr, 0)
    }

    return (
      <div className={isHomePage ? `${styles.navbarContainer} ${styles.navbarContainerHome}` : `${styles.navbarContainer}`}>
        <div className={styles.leftNavbar}>
            <div className={styles.menuIcon} onClick={() => setSidebarOpen(true)}>
                <HiOutlineMenuAlt4 />
            </div>
            {/* <Link href="/" passHref>
                <h2>Semi Aquatics</h2>
            </Link> */}
        </div>
        <div className={styles.rightNavbar}>
            <Link href="/cart">
            <p>Cart ({itemCount ? itemCount : 0})</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;
