import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};

function formatDate(date) {
    if (!date) return '';

    const hours = date.getHours() > 9 ? `0${date.getHours()}` : `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {

    const [timeString, setTimeString] = useState('');

    useEffect(() => {

        const clockInterverl = setInterval(() => {
            const now = new Date();

            const newTimeString = formatDate(now);
            setTimeString(newTimeString);

        }, 1000);
        return () => {
            clearInterval(clockInterverl);
        }
    }, [])

    return (
        <h1 style={{ fontSize: 40 }}>{timeString}</h1>
    );
}

export default Clock;