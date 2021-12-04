import React, { useState } from 'react'
import moment from 'moment';

const Clock = () => {
    const [time, setTime] = useState(moment().utcOffset("+15:00").format('HH:mm:ss'));

    function updateTime() {
        setTime(moment().utcOffset("+15:00").format('HH:mm:ss'));
    }
    setInterval(updateTime, 1000);

    return (
        <div className = "timer">
            {"Daily Reset: " + time}
        </div>
    )
}

export default Clock
