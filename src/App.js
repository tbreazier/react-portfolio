import React from 'react';
import Intro from './components/Intro';
import Nav from './components/Nav'



function App() {
  return (
    <div id="background">
      <Nav></Nav>
      <main>
        <Intro></Intro>
      </main>
    </div>
  );
}

export default App;
