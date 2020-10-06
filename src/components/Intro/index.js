import React from 'react';
import profileImage from "../../assets/imgs/profile1.png";

function Intro() {
    return (
        <section className="my-5">
          <h2 id="intro">Hello, I'm Tom!</h2>
          <h2 id="intro">Welcome to my portfolio.</h2>
          <img src={profileImage} id="profile" className="my-2" alt="profile" />
          <p>Project Manager | Web Developer | Cybersecurity Enthusiast</p>
        </section>
    );
}

export default Intro;