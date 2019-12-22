import React, { useState, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
    const navRef = useRef(null);

    const [ isMenuToggled, setMenuToggle ] = useState(false);
    const navLinksClassName = isMenuToggled ? 'nav-links nav-links-show' : 'nav-links';

    const handleMenuClick = () => {
        setMenuToggle(!isMenuToggled);
    }

    const handleLinkPress = () => {
        setMenuToggle(false);
    }

    const handleNamePress = () => {
        scroll.scrollToTop();
    }

    return (
        <div ref={navRef} className='nav sticky'>

            <div className='nav-name' onClick={handleNamePress}>
                Thomas Armena
            </div>

            <div className={navLinksClassName}>
                <Link className='nav-link' activeClass="active" to="about-me" spy={true} smooth={true} offset={-20} duration={500} onClick={handleLinkPress}>
                    About Me
                </Link>
                <Link className='nav-link' activeClass="active" to="projects" spy={true} smooth={true} offset={-20} duration={500} onClick={handleLinkPress}>
                    Projects
                </Link>
                <Link className='nav-link' activeClass="active" to="work-experience" spy={true} smooth={true} offset={-20} duration={500} onClick={handleLinkPress}>
                    Work Experience
                </Link>
                <a id='nav-resume' href="./ThomasResume.pdf">Resume</a>
            </div>

            <div className='nav-menu-button' onClick={handleMenuClick} >
                <i className="material-icons">menu</i>
            </div>
           

        </div>
    )
}

export default Nav;
