import React from 'react';

const AboutMe = () => {

    return (
        <div className='about-me'>
            <br/><br/><br/>
            <h1>About Me</h1>
            <hr/>

            <p>
                Hey! I'm Thomas, an aspiring Software Engineer. <br/><br/>

                I am a strong believer of the <b>KISS</b> design principle (<b>Keep It Simple Stupid!</b>) and 
                do my best to apply it to developing maintainable and readable code, as well as clean user interfaces. <br/><br/>

                I am interested in many areas, including operating systems, cloud services, web development, and game development.
                As a tech junkie, I hope be involved with the bleeding edge of technology. It is this desire that pushes me to learn 
                new things everyday. <br/><br/>

                <i className="fa fa-github-square"></i> 
                <a href="https://github.com/thomas-armena"> thomas-armena</a>
                <br/><br/>

                <i className="fa fa-envelope-square"></i>   armenat@mcmaster.ca
                <br/><br/>

                <i className="fa fa-linkedin"></i> 
                <a href="https://www.linkedin.com/in/thomas-armena/"> thomas-armena</a>
                <br/><br/>

                <i className="fa fa-file"></i> 
                <a href="/resume.pdf" download="resume">    download my resume </a>

                
                
            </p>
        </div>
    )
}

export default AboutMe;