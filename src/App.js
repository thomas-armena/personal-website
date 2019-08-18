import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Overview from './sections/Overview';
import Projects from './sections/Projects';
import WorkExperience from './sections/WorkExperience';

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <div className='content'>
        <Overview />
        <Projects />
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
