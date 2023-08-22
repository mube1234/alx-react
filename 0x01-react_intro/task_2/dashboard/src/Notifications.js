import React from 'react'
import './Notifications.css'
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';
const Notifications = () => {
    return (
        <div className='Notifications'>
             <button style={{ float: 'right' }} aria-label='Close' onClick={console.log('Close button has been clicked')}>
                <img src={closeIcon} alt='close icon' />
            </button>

            <p>
                Here is the list of notifications
            </p>

            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>

        </div>
    )
}

export default Notifications