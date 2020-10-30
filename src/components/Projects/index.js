import React from 'react';
import Card from '../Card';
import simple from '../../assets/imgs/simplesocial.jpg';
import bored from '../../assets/imgs/bored.png';
import note from '../../assets/imgs/note.png';
import readme from '../../assets/imgs/readme.png';
import weather from '../../assets/imgs/weather.png';
import workday from '../../assets/imgs/workday.png';
import movielot from '../../assets/imgs/movielot.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects () {
    const projects = [
        {
            "id": 1,
            "name": "Movie Lot",
            "image": movielot,
            "github": "https://movielot.herokuapp.com/",
            "about": "An app to store LOTS of movies."
        },
        {
            "id": 2,
            "name": "Simple Social",
            "image": simple,
            "github": "https://simple-social-fullstack.herokuapp.com/",
            "about": "Social Media like it was in 2003."
        },
        {
            "id": 3,
            "name": "Bored @ Home",
            "image": bored,
            "github": "https://josephptflanagan.github.io/project-1/",
            "about": "Random content for when you're Bored at Home."
        },
        {
            "id": 4,
            "name": "Note Taker",
            "image": note,
            "github": "https://safe-gorge-23279.herokuapp.com/",
            "about": "Take notes with Express."
        },
        {
            "id": 5,
            "name": "Readme Generator",
            "image": readme,
            "github": "https://github.com/tbreazier/readme-generator",
            "about": "Generate a readme by answering command line questions."
        },
        {
            "id": 6,
            "name": "Weather Dashboard",
            "image": weather,
            "github": "https://tbreazier.github.io/weather-dashboard/",
            "about": "Get the 5 day forecast for you city."
        },
        {
            "id": 7,
            "name": "Work Day Schedule",
            "image": workday,
            "github": "https://tbreazier.github.io/workday-scheduler/",
            "about": "Plan you day!"
        }
    ];

    return (
        <section className="projects">
          <hr></hr>
          
          <div className="row justify-content-center">
            <div className="col-3 projects-section">
            {projects.map((project) => (
            <Card key={project.id} image={project.image} name={project.name} github={project.github} about={project.about}/>
            ))}
          </div>  
          </div>
        </section>
      
    );

    
}

export default Projects