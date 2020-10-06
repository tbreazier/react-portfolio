import React from 'react';
import profileImage from "../../assets/imgs/profile1.png";
import projectIcon from "../../assets/imgs/project.png";
import webIcon from "../../assets/imgs/web.png";
import securityIcon from "../../assets/imgs/security.png"

function Intro() {
    return (
        <section className="my-5">
          <h2 id="intro">Hello, I'm Tom!</h2>
          <h2 id="intro">Welcome to my portfolio.</h2>
          <img src={profileImage} id="profile" className="my-2" alt="profile" />
          <div>
            <img src={projectIcon} alt="logo" id="logo"/>
            <h4>Project Manager</h4>
          </div>
          <div>
            <img src={webIcon} alt="logo" id="logo" />
            <h4>Web Developer</h4>
          </div>
          <div>
            <img src={securityIcon} alt="logo" id="logo" />
            <h4>Cybersecurity Enthusiast</h4>
          </div>
        </section>
    );
}

export default Intro;