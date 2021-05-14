import React from 'react';
import useClock from '../../hooks/useClock';


function Clock() {

    const { timeString } = useClock();

    return (
        <h1 style={{ fontSize: 40 }}>{timeString}</h1>
    );
}

export default Clock;