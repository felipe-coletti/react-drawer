import React from 'react'
import styles from './styles.module.css'

const DrawerItem = ({ href, children }) => {
    return (
        <li className={styles.item}>
            <a className={styles.link} href={href}>
                {children}
            </a>
        </li>
    )
}

export default DrawerItem
