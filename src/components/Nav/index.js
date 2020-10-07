import React, { useEffect } from 'react';

function Nav(props) {
  const {
    links = [],
    currentLink,
    setCurrentLink
  } = props

  useEffect(() => {
    document.title = currentLink.name;
  }, [currentLink]);

  return (
    <header className='flex-row px-1'>
      <h1>
        <a href='/react-portfolio/'>Tom Breazier</a>
      </h1>
      <div>
      <nav>
        <ul className='flex-row'>
          {links.map((link) => (
            <li className={`mx-2 nav-link ${currentLink.name === link.name && 'nav-link-active'}`} key={link.name}>
              <span onClick={() => {setCurrentLink(link)}}>{link.name}</span>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Nav;