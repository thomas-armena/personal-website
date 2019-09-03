import React from 'react';

const Projects = () => {
    return (
        <div>
            <br/>
            <h1>Projects</h1>
            <hr/>

            <h3>Chess Dash</h3>
            A mobile arcade puzzle game inspired by Chess (available on the Google Playstore)
            <ul>
                <li>Designed an algorithm which creates unlimited randomly-generated puzzles (Dart)</li>
                <li>Created a responsive mobile UI using Google’s Flutter UI kit</li>
            </ul>
            <h3>Postra</h3>
            A web application for making digital collages and sharing them online
            <ul>
                <li>Built an online editor in React that lets you perform vector transformation on images and
                text</li>
                <li>Created a backend service to store images and collage layouts, aswell as handle user
                authentication (node, express, mongo)</li>
            </ul>
            <h3>Chaos</h3>
            1st place submission for a game programming competition (Rogue-like top down shooter)
            <ul>
                <li>Worked in a team of four to brainstorm ideas, design, develop, and debug the game</li>
                <li>Implemented the movement mechanics, equipment system, and random level
                generation (Game Maker Studio 2)</li>
                <li>Pitched game to judges alongside my team in Sheridan College, which included Computer
                Science instructors</li>
            </ul>
            <h3>Finstagram</h3>
            Top 5 project submission at a CIBC Hackathon
            <ul>
                <li>Created a mobile web app in React with a live feed of financial advice</li>
                <li>Leveraged open banking APIs to obtain transactional data to base advice off of</li>
                <li>Placed top 5 out of 25 teams</li>
            </ul>
            <h3>Git Plant</h3>
            Your own linux terminal plant that grows as long as you stay active on Github
            <ul>
                <li>Used a fractal algorithm to create randomly generated plants (C++)</li>
                <li>Rendered the plant in the terminal only using ASCII characters</li>
            </ul>
            
        </div>
    );
}

export default Projects;