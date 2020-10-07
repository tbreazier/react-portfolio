import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import pdf from './assets/resume.pdf';

function App() {
  const [links] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Projects'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ]);
  const [currentLink, setCurrentLink] = useState(links[0]);

  const renderPage = () => {
    switch (currentLink.name) {
      case 'Contact':
        return <Contact />
        case 'Projects':
        return <Projects />
        case 'Resume':
        return <Resume pdf={pdf}/>
      default:
        return <Intro />
    }
  }

  return (
    <div className="main">
      
        <Nav links={links} currentLink={currentLink} setCurrentLink={setCurrentLink}></Nav>
        <main>
          <div>{renderPage(currentLink)}</div>
        </main>
        <div style={{clear: "both"}}></div>
      <Footer />
    </div>
  );
}

export default App;
