import React from 'react';
import '../css/mazda_style.css'

const MRangeSlider = (props) => {


    return (
        <div class="slide-container">
            <input type="range" min="1" max="100" defaultvalue="50" class="slider" />
        </div>
    )
}

export default MRangeSlider;