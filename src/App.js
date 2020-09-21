import React from 'react';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import WorkExperience from './sections/WorkExperience';

function App() {
  return (
    <div>
      <Nav/>
      <div className='content'>
        <AboutMe />
        <WorkExperience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
