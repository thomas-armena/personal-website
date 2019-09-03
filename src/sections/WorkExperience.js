import React from 'react';

const WorkExperience = () => {
    return (
        <div>
            <br/>
            <h1>Work Experience</h1>
            <br/>

            <h3>Contract Full Stack Developer - University of Toronto (Sep 2018 - Sep 2019)</h3>
            <ul>
                <li>Developed an interactive learning website for a first year anatomy course</li>
                <li>Designed a RESTful API that handles student authentication and progress in Golang and using MongoDB</li>
                <li>Created various exercises in React such as drawing ligaments on 3D models, drag and drop choices, etc</li>
                <li>Implemented scalable state management for the frontend using redux</li>
            </ul>
            


            <h3>Software Developer (Co-op) - CIBC Innovation Lab (Jan-Aug 2019)</h3>
            <ul>
                <li>
                    Created a system of biometric camera’s that collects and stores facial data into a MySQL
                    database and can be controlled remotely (raspberry pis and amazon web services)
                </li>
                <li>
                    Worked with one other co-op to prototype a smart device station that allows you to connect
                    and use peripheral devices (printers, scanners, card readers) via bluetooth proximity and
                    secured wireless connection (node and electron)
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
                        <li>Contributed to the high-level design architecture of the deep learning model used for
                        the AI, experimented with recurrent neural networks to see how they could be used to
                        leverage contextual information to make decisions</li>
                    </ul>
                </li>
            </ul>

            <h3>Application Developer (Co-op) - Canadian Imperial Bank of Commerce (Sep-Dec 2018)</h3>
            <ul>
                <li>Automated banking processes in a z/OS system using REXX and JCL</li>
            </ul>
            <h3>Innovation Engineer and QA Automation (Co-op) - World Vision Canada (May-Aug 2018)</h3>
            <ul>
                <li>Created a hand gesture controlled minigame alongside 2 other developers in Unity (C
                sharp) using LEAP (hand motion detector) in order promote an upcoming Netflix
                documentary</li>
                <li>The project was showcased in cineplex on the big screen during the launch of the documentary</li>
                <li>Created a web scraper in python and selenium in order to introduce integration tests into the
                CI/CD pipeline</li>
            </ul>

        </div>
    );
}

export default WorkExperience;