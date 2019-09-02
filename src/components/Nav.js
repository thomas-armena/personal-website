import React, { useEffect, useState, useRef } from 'react';

const Nav = () => {
    const navRef = useRef(null);

    const [ isSticky, setIsSticky ] = useState(false);
    const [ isMenuToggled, setMenuToggle ] = useState(false);

    useEffect(()=>{
        const sticky = navRef.current.offsetTop;
        window.onscroll = ()=>{
            const isSticky = window.pageYOffset >= sticky;
            setIsSticky(isSticky);
            if (!isSticky) setMenuToggle(false);
        }
    }, [])

    const navClassName = isSticky ? 'nav sticky' : 'nav';
    const navLinksClassName = isSticky && isMenuToggled ? 'nav-links show' : 'nav-links';

    const handleMenuClick = () => {
        setMenuToggle(!isMenuToggled);
    }

    return (
        <div ref={navRef} className={navClassName}>

            <div id='nav-name'><b>></b> Thomas Armena</div>

            <div className={navLinksClassName}>
                <a id='nav-about-me'>About Me</a>
                <a id='nav-work-experience'>Work Experience</a>
                <a id='nav-projects'>Projects</a>
                <a id='nav-contact-me'>Contact Me</a>
            </div>

            <div id='nav-menu-button' onClick={handleMenuClick} >
                <i className="material-icons">menu</i>
            </div>
           

        </div>
    )
}

export default Nav;