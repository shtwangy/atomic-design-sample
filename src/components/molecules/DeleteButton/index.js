import React from "react"
import styles from './styles.css'
import {TrashCanIcon} from "../../atoms/Icon";
import Balloon from "../../atoms/Balloon";

const DeleteButton = ({className, ...props}) => {
    <span className={[styles.root, className].join(' ')} {...props}>
        <TrashCanIcon />
        <Balloon>削除する</Balloon>
    </span>
}

export default DeleteButton
