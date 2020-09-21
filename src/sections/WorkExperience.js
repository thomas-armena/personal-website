import React from 'react';
import { Element } from 'react-scroll';
import TerminalText from '../components/TerminalText';


const WorkExperience = () => {
    return (
        <Element name="work-experience">
            <br/>
            <h1><TerminalText text='Work Experience'/></h1>
            <hr/>
            <br/>

            <h3>Development Lead - MyPalate - <a href="https://mypalate.ca">mypalate.ca</a></h3> 
            <aside>Jan 2020 - Present</aside>
            <ul>
                <li>
                    <b>Main coding contributor</b> to mobile recipe app (<b>Flutter</b>), backend service (<b>Golang, PostgreSQL</b>),
                    content management platform (<b>React</b>), and continuous integration/deployment (<b>AWS Lightsail, Github Actions, Docker</b>)
                </li>
                <li>
                    Managed a team of volunteer contributors, lead sprint meetings, allocated tasks, facilitated code review, 
                    and made major technical decisions
                </li>
            </ul>
            <img className='pic-phone' src='mp-discover.gif'/>
            <img className='pic-phone' src='mp-creator.gif' />
            <img className='pic' src='mp-console.png' />

            <h3>Technical Lead - Llettonna - <a href="https://momsovermatter.ca">momsovermatter.ca</a></h3> 
            <aside>May 2020 - Sep 2020</aside>
            <ul>
                <li>
                    Lead and contributed to development of a survey web app (<b>React</b>) and mobile iOS app (<b>Swift</b>) for postpartum mothers,
                    as well as the backend for collecting and exporting user and survey data (<b>Node.js</b>)
                </li>
                <li>
                    Made major technical decisions and worked with project manager to plan sprints and allocate tasks.
                </li>
            </ul>

            <img className='pic-phone' src='momapp.gif' />
            <img className='pic' src='mom-main.png' />

            <h3>Contract Full Stack Developer - University of Toronto </h3>
            <aside>Sep 2018 - Sep 2019</aside>
            <ul>
                <li>Developed an interactive learning website for a first year anatomy course</li>
                <li>Designed a RESTful API that handles student authentication and progress in Golang and using MongoDB</li>
                <li>Created various exercises in React such as drawing ligaments on 3D models, drag and drop choices, etc</li>
                <li>Implemented scalable state management for the frontend using redux</li>
            </ul>
            <img className='pic' src='kinundrum.png' />


            <h3>Software Developer (Co-op) - CIBC Innovation Lab </h3>
            <aside>Jan-Aug 2019</aside>
            <ul>
                <li>
                    Created a system of <b>biometric camera’s</b> that <b>collects and stores facial data</b> into a MySQL
                        database and can be controlled remotely (<b>raspberry pis</b> and <b>amazon web services</b>)
                </li>
                <li>
                    Worked with one other co-op to prototype a smart device station that allows you to connect
                    and use peripheral devices (printers, scanners, card readers) via <b>bluetooth proximity</b> and
                    secured wireless connection (<b>node and electron</b>)
                    <ul>
                        <li>Demoed this project to stakeholders which included VPs and seniors of a few departments</li>
                        <li>Held meetings to handoff knowledge of the architecture and code to the engineers that will
                        bring the project into production</li>
                    </ul>
                </li>
                
                <li>
                    Worked in a team of 5 to develop a digital kiosk assistant for future banking centres
                    <ul>
                        <li>Created the ”hearing” capabilities of the AI, leveraging mic arrays attached to a raspberry
                        pi to capture audio and convert it to text using various AWS APIs</li>
                        <li><b>Contributed to the high-level design architecture of the deep learning model</b> used for
                        the AI, experimented with recurrent neural networks to see how they could be used to
                        leverage contextual information to make decisions</li>
                    </ul>
                </li>
            </ul>

            <h3>Application Developer (Co-op) - Canadian Imperial Bank of Commerce </h3>
            <aside>Sep-Dec 2018</aside>
            <ul>
                <li>Automated banking processes in a z/OS system using REXX and JCL</li>
            </ul>
            <h3>Innovation Engineer and QA Automation (Co-op) - World Vision Canada </h3>
            <aside>May-Aug 2018</aside>
            <ul>
                <li>Created a hand gesture controlled minigame alongside 2 other developers in Unity (C
                sharp) using LEAP (hand motion detector) in order promote an upcoming Netflix
                documentary</li>
                <li>The project was showcased in cineplex on the big screen during the launch of the documentary</li>
                <li>Created a web scraper in python and selenium in order to introduce integration tests into the
                CI/CD pipeline</li>
            </ul>

        </Element>
    );
}

export default WorkExperience;
