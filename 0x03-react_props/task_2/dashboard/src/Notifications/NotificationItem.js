import { getLatestNotification } from '../utils/utils';
import './NotificationItem.css';

export default function NotificationItem({ type, html, value }) {
    const createMarkup = () => {
        return { __html: getLatestNotification() };
    }
    return (
        <ul>
            <li data-priority={type} >'New course available'</li>
            <li data-priority={type} >"New resume available"</li>
            <li data-priority={type} dangerouslySetInnerHTML={createMarkup()}></li>
        </ul>
    );
};