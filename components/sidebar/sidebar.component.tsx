import styles from './Sidebar.module.scss'
import { GrClose } from 'react-icons/gr'
import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import { useRef } from 'react'

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
                <Link href="/artists">
                    <p onClick={() => setSidebarOpen(false)}>Art</p>
                </Link>
                <Link href="/story">
                    <p onClick={() => setSidebarOpen(false)}>Story</p>
                </Link>
                <Link href="/archive">
                    <p onClick={() => setSidebarOpen(false)}>Archive</p>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Sidebar;
