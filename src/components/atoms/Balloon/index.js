import React from 'react'
import styles from './styles.css'
import HoverTipInteraction, {Marker, Tip} from "../HoverTipInteraction";

const Balloon = ({children, className, ...props}) => {
    return (
        <span className={[styles.balloon, className].join(' ')}{...props}>{children}</span>
    )
}

export default Balloon

export const BalloonTip = ({children, label, className, ...props}) => (
    <HoverTipInteraction className={className} {...props}>
        <Marker><span>{ children }</span></Marker>
        <Tip><Balloon>{ label }</Balloon></Tip>
    </HoverTipInteraction>
)
