import React from "react";
import PropTypes from 'prop-types';
import './NotificationItem.css';

export default function NotificationItem({ type, html, value }) {

    return (

        html
            ?
            <li data-priority={type} dangerouslySetInnerHTML={html}></li>
            :
            <li data-priority={type} >{value}</li>


    );
};

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    })
}

NotificationItem.defaultProps = {
    type: 'default',
};