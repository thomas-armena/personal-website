import React, { useEffect, useState, useRef } from 'react';

const Nav = () => {
    const navRef = useRef(null);

    const [ isSticky, setIsSticky ] = useState(false);

    useEffect(()=>{
        const sticky = navRef.current.offsetTop;
        window.onscroll = ()=>{
            console.log(window.pageYOffset >= sticky)
            setIsSticky(window.pageYOffset >= sticky);
        }
    }, [])

    const navClassName = isSticky ? 'nav sticky' : 'nav';
    //console.log(isSticky)

    return (
        <div ref={navRef} className={navClassName}>
            Nav
        </div>
    )
}

export default Nav;