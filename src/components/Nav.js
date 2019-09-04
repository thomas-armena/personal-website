import React, { useEffect, useState, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import TerminalText from './TerminalText';


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
    }, []);

    const navClassName = isSticky ? 'nav sticky' : 'nav';
    const navLinksClassName = isSticky && isMenuToggled ? 'nav-links nav-links-show' : 'nav-links';
    const navNameClassName = isSticky ? 'nav-name nav-name-show' : 'nav-name'; 
    const navMenuButtonClassName = isSticky ? 'nav-menu-button nav-menu-button-show' : 'nav-menu-button';

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
        <div ref={navRef} className={navClassName}>

            <div className={navNameClassName} onClick={handleNamePress}>
                <TerminalText text='Thomas Armena' />
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
                <a id='nav-resume' href="/resume.pdf">Resume</a>
            </div>

            <div className={navMenuButtonClassName} onClick={handleMenuClick} >
                <i className="material-icons">menu</i>
            </div>
           

        </div>
    )
}

export default Nav;