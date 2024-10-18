import React from 'react'

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with Django and React JS.',
      technologies: ['Django', 'React JS', 'PostgreSQL', 'Redux']
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates.',
      technologies: ['React JS', 'Firebase', 'Material-UI']
    },
    {
      title: 'Blog CMS',
      description: 'A content management system for blogs with user authentication and authorization.',
      technologies: ['Django', 'Django REST Framework', 'React JS', 'JWT']
    }
  ]

  return (
    <section className="section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(', ')}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects