import React from "react"
import styles from './styles.css'

export const Heading1 = ({children, className, ...props}) => {
    return (
        <h1 className={[styles.h1, className].join(' ')} {...props}>{children}</h1>
    )
}

export const Heading2 = ({children, className, ...props}) => {
    return (
        <h1 className={[styles.h1, className].join(' ')} {...props}>{children}</h1>
    )
}

export const Heading3 = ({children, className, ...props}) => {
    return (
        <h1 className={[styles.h1, className].join(' ')} {...props}>{children}</h1>
    )
}

export const Heading4 = ({children, className, ...props}) => {
    return (
        <h1 className={[styles.h1, className].join(' ')} {...props}>{children}</h1>
    )
}

export const Heading5 = ({children, className, ...props}) => {
    return (
        <h1 className={[styles.h1, className].join(' ')} {...props}>{children}</h1>
    )
}

export const Heading6 = ({children, className, ...props}) => {
    return (
        <h1 className={[styles.h1, className].join(' ')} {...props}>{children}</h1>
    )
}
