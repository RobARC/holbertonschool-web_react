import { React } from "react";
import PropTypes from 'prop-types';
import closeIcon from './close-icon.png';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

export default function Notifications(displayDrawer) {

    const closeEvent = () => {
        console.log('Close button has been clicked');
    }

    const createMarkup = () => {
        return { __html: getLatestNotification() };
    }

    if (displayDrawer) {
        return (
            <div>
                <div className="menuItem">
                    <p>Your notifications</p>
                </div>
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



                    < NotificationItem type="default" value="New course available" />
                    < NotificationItem type="urgent" value="New resume available" />
                    < NotificationItem type="urgent" html={createMarkup()} />

                </div >
            </div>
        );
    }
    if (displayDrawer) {
        return (
            <MenuItem />
        )
    }


}


const MenuItem = () => {
    return (
        <div>
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            {Notifications()}
        </div>
    )
}


Notifications.propTypes = {
    displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
    displayDrawer: false
}