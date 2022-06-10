import { React } from "react";
import closeIcon from './close-icon.png';
import './Notifications.css'
import NotificationItem from './NotificationItem';

export default function Notifications() {

    const closeEvent = () => {
        console.log('Close button has been clicked');
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

            < NotificationItem />

        </div >
    );
};

