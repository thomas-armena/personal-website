import React, { useRef, useEffect, useState } from 'react';

const Header = () => {

    return (
        <div>
            <div className='header'>
                <div className="header-name-tagline-wrapper">
                    <Name/>
                    <Tagline/>
                </div>
                <ScrollPrompt/>
            </div>
        </div>
        
    )
}

const Name = () => {
    return (
        <div className='header-name'>
            Thomas Armena
        </div>
    )
}

const Tagline = () => {
    return (
        <div className='header-tagline'>
            <b>></b> Software Engineer
        </div>
    )
}

const ScrollPrompt = () => {
    return (
        <div className='header-scroll-prompt'>
            Scroll Down <br/>
            <i className="material-icons">keyboard_arrow_down</i>
        </div>
    )
}

export default Header;