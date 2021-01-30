import React from "react";
import styles from './styles.css'
import StickyHeaderLayout from "../../atoms/StickyHeaderLayout";
import Header from "../../organisms/Header";
import PageHeader from "../../organisms/PageHeader";
import NotificationList from "../../organisms/NotificationList";

const NotificationListTemplate = ({
    notifications,
    navigations,
    breadcrumb,
    onClickDeleteNotification
}) => (
    <StickyHeaderLayout>
        <Header navigations={navigations} />
        <main className={styles.main}>
            <PageHeader navigations={breadcrumb}/>
            <NotificationList
                className={styles.notifications}
                programs={notifications}
                onClickDelete={onClickDeleteNotification}
            />
        </main>
    </StickyHeaderLayout>
)

export default NotificationListTemplate

