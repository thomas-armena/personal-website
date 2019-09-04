import React, { useState, useEffect } from 'react';

const CURSOR_INTERVAL = 500;

const TerminalText = ({text}) => {

    const [ cursorShow, setCursorShow ] = useState(true);

    useEffect(()=>{
        let intervalID = setInterval(()=>{
            setCursorShow( cursorShow => !cursorShow);
        }, CURSOR_INTERVAL);
        return ()=>clearInterval(intervalID);
    }, []);

    const cursor = cursorShow ? '|' : '';

    return(
        <div className = 'terminal-text'>
            <b>></b>{text}<b>{cursor}</b>
        </div>
    );
}

export default TerminalText;