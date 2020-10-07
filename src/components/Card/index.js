import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    return (
            <a className="tile-wrapper" href={props.github} target="blank"><div className="project-tile">
                <h6 className="project-name">{props.name}</h6>
                <div className="project-img-container">
                  <img className="project-img" alt={props.name} src={props.image} />
                </div>
                <h6 className="project-about">{props.about}</h6>
            </div>
            </a>
      );
    };
  
  export default Card;