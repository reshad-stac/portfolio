import React from 'react'
import backgroundImage from '../assets/background.jpg'

const About: React.FC = () => {
  return (
    <section className="section about-section">
      <div className="content">
        <h1>John Doe</h1>
        <h2>Software Engineering Student</h2>
        <p>
          I'm a passionate software engineering student with expertise in Django and React JS.
          I love building web applications and solving complex problems through code.
        </p>
      </div>
    </section>
  )
}

export default About