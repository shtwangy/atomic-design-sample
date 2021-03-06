import React, {Component} from "react"
import styles from './styles.css'
import Img from '../../atoms/Img'
import Heading from "../../atoms/Heading"
import {InfoTxt} from "../../atoms/Txt"
import Time from '../../atoms/Time'
import DeleteButton from "../../molecules/DeleteButton"
import MediaObjectLayout from "../../atoms/MediaObjectLayout";
import {containPresenter} from "../../utils/HoC";

// TODO: Functional Componentで書き換えてみる
export class NotificationContainer extends Component {
    constructor() {
        super();
        this.onClickDelete = ::this.onClickDelete;
    }

    render() {
        const {presenter, onClickDelete:propsOnClickDelete, ...props} = this.props;
        const onClickDelete = propsOnClickDelete ? this.onClickDelete : null;
        const presenterProps = {onClickDelete, ...props};
        return presenter(presenterProps);
    }

    onClickDelete(...args) {
        const {onClickDelete, program} = this.props;
        onClickDelete(...args, program);
    }
}

const NotificationPresenter = ({
                                   program,
                                   className,
                                   onClickDelete,
                                   ...props
                               }) => (
    <MediaObjectLayout tag='section' className={[styles.root, className].join(' ')} {...props}>
        <Img src={program.thumbnail} className={styles.media} width='128' height='72' />
        <Heading level={3} visualLevel={6}>{program.title}</Heading>
        <InfoTxt size='s'>{program.channelName}</InfoTxt>
        <InfoTxt size='s' className={styles.time}>
            <Time format='MM月DD日(ddd)HH:mm'>{program.startAt}</Time>
            〜
            <Time format='HH:mm'>{program.endAt}</Time>
        </InfoTxt>
        <DeleteButton onClick={onClickDelete} className={styles.del} />
    </MediaObjectLayout>
)

const Notification = containPresenter(NotificationContainer, NotificationPresenter)

export default Notification
