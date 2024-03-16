import React from 'react'
import "./portfolio.css"
import first_picture from '../../assets/portfolio1.jpg'
import second_picture from '../../assets/portfolio2.jpg'
import third_picture from '../../assets/portfolio3.jpg'
import fourth_picture from '../../assets/portfolio4.jpg'
import fifth_picture from '../../assets/portfolio5.png'
import sixth_picture from '../../assets/portfolio6.jpg'



const projects = [
  {
    id: 1,
    image: first_picture,
    title: "Streamfog",
    github: "https://github.com/Somdotta07/Somarven-Arenas-frontend",
    demo: "https://streamfog.com/",
  },
  {
    id: 2,
    image: second_picture,
    title: "Alluvie",
    github: "https://github.com/Somdotta07/Somarven-Arenas-frontend",
    demo: "https://alluvie.com/",
  },
  {
    id: 3,
    image: third_picture,
    title: "Elcami",
    github: "https://github.com/Somdotta07/Somarven-Arenas-frontend",
    demo: "https://elcami.eu/es/",
  },

  {
    id: 4,
    image: fourth_picture,
    title: "Somarven- Full-stack Group project",
    github: "https://github.com/Somdotta07/Somarven-Arenas-frontend",
    demo: "https://somarven.netlify.app/",
  },

  {
    id: 5,
    image: fifth_picture,
    title: "Space Travelers Hub- React-Redux Group project",
    github: "https://github.com/Somdotta07/space-travelers-hub",
    demo: "https://cranky-cray-0feacf.netlify.app/",
  },
  {
    id: 6,
    image: sixth_picture,
    title: "Awesome Books - displays, add books",
    github: "https://github.com/Somdotta07/Awesome_Books",
    demo: "https://somdotta07.github.io/Awesome_Books/",
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (<div key = {id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </div>)
        })
        }
      </div>
    </section>
  )
}

export default Portfolio