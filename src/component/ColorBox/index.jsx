import React, { useState } from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './colorBox.scss';

ColorBox.propTypes = {

};

// function getRandomColor() {
//     const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
//     const randomIndex = Math.trunc(Math.random() * 5);
//     return COLOR_LIST[randomIndex];
// }

function ColorBox() {

    // const [color, setColor] = useState(() => {
    //     const initialColor = localStorage.getItem('box_color') || 'deeppink';
    //     return initialColor;
    // });

    const { color } = useMagicColor();

    // function handleBoxClick() {
    //     const newColor = getRandomColor();
    //     setColor(newColor);
    //     localStorage.setItem('box_color', newColor)
    // }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
        // onClick={handleBoxClick}
        >

        </div>
    );
}

export default ColorBox;