import React from 'react'
import styles from './styles.css'

const Balloon = ({children}) => {
    return (
        <span className={styles.balloon}>{children}</span>
    )
}

export default Balloon
