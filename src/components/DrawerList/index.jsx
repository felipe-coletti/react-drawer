import React from 'react'
import styles from './styles.module.css'

const DrawerItem = ({ children }) => {
    return (
        <ul className={styles.list}>
            {children}
        </ul>
    )
}

export default DrawerItem
