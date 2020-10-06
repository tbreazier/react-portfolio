import React, { useState } from 'react';
import Intro from './components/Intro';
import Nav from './components/Nav'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
      default:
        return <Intro />
    }
  }

  return (
    <div>
      <Nav links={links} currentLink={currentLink} setCurrentLink={setCurrentLink}></Nav>
      <main>
        <div currentLink={currentLink}>{renderPage(currentLink)}</div>
      </main>
        <Footer />
    </div>
  );
}

export default App;
