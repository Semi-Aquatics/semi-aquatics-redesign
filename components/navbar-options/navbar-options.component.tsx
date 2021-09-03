import { Dispatch, SetStateAction, useRef } from "react";

import styles from './NavbarOptions.module.scss'
import Link from 'next/link'

// Hooks
import { useOnClickOutside } from "../../hooks/use-on-click-outside";

interface NavbarOptionsProps {
    setNavbarOpen: Dispatch<SetStateAction<boolean>>
}

const NavbarOptions:React.FC<NavbarOptionsProps> = ({ setNavbarOpen }) => {
    const ref: any = useRef();

    useOnClickOutside(ref, () => setNavbarOpen(false));

    return (
        <div className={styles.navbarOptionsContainer}>
            <div ref={ref} className={styles.menuItemsContainer}>
                <Link href="/drop">
                    <a>Next Drop</a>
                </Link>
                <Link href="/lookbook">
                    <a>Lookbook</a>
                </Link>
                <Link href="/drop">
                    <a>Archive</a>
                </Link>
                <Link href="/drop">
                    <a>Story</a>
                </Link>
            </div>
        </div>
    );
};

export default NavbarOptions;