import React from "react"
import styles from './styles.css'
import {TrashCanIcon} from "../../atoms/Icon";
import Balloon from "../../atoms/Balloon";
import HoverTipInteraction from "../../atoms/HoverTipInteraction";

const DeleteButton = ({className, onClick, ...props}) => (
    <HoverTipInteraction className={[styles.root, className].join(' ')} {...props}>
        <TrashCanIcon onClick={onClick} />
        <Balloon>削除する</Balloon>
    </HoverTipInteraction>
)

export default DeleteButton
