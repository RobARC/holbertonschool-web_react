import { React } from "react";
import closeIcon from './close-icon.png';
import './Notifications.css'
import { getLatestNotification } from './utils';

const Notifications = () => {

    const closeEvent = () => {
        console.log('Close button has been clicked');
    }

    const createMarkup = () => {
        return { __html: getLatestNotification() };
    }

    return (
        <div className='Notifications'>
            <button

                style={{
                    color: '#3a3a3a',
                    fontWeight: 'bold',
                    background: 'none',
                    border: 'none',
                    fontSize: '15px',
                    float: 'right',
                    cursor: 'pointer',
                    outline: 'none',
                }}

                arial-label="Close" onClick={closeEvent} >

                <img src={closeIcon} alt="Close icon"></img>

            </button>

            <p>Here is the list of notifications</p>

            <ul>
                <li data-priority="default" >'New course available'</li>
                <li data-priority="urgent">"New resume available"</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={createMarkup()}></li>
            </ul>

        </div >
    );
};

export default Notifications;