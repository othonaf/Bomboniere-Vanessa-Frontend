import React from 'react';
import { IoNotifications } from "react-icons/io5";
import { NotificationCount, NotificationIcon } from './styled';

const Notification = ({ count }) => (
    <NotificationIcon>
        <IoNotifications size="35px"/>
        {count > 0 && <NotificationCount>{count}</NotificationCount>}
    </NotificationIcon>
);

export default Notification;
