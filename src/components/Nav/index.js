import React from 'react';

function Nav() {

  return (
      <header className="flex-row px-1 navbar">
          <h2>
            <a data-testid="link" href="/">
            <span> </span> Tom Breazier
            </a>
        </h2>
          <nav>
              <ul className="flex-row">
                  <li className="mx-2">
                      <a href="#about">
                          About
                    </a>
                  </li>
                  <li className="mx-2">
                      <a href="#projects">
                          Projects
                    </a>
                  </li>
                  <li className="mx-2">
                      <a href="#resume">
                          Resume
                    </a>
                  </li>
                  <li className="mx-2">
                      <a href="#contact">
                          Contact
                    </a>
                  </li>
              </ul>
          </nav>
      </header>
  );
}

export default Nav;