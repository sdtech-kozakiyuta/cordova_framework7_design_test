import React from 'react';
import '../css/mazda_style.css'

const MButton = (props) => {
    return (
        <button onClick={() => props.onClick()} className="mbutton">
            Label
        </button>
    )
}

export default MButton;