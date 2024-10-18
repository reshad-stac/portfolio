import React from 'react'

const Skills: React.FC = () => {
  const skills = [
    'Django', 'React JS', 'Python', 'JavaScript', 'TypeScript',
    'HTML', 'CSS', 'Git', 'RESTful APIs', 'SQL', 'Node.js'
  ]

  return (
    <section className="section">
      <h2>Skills</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ background: '#646cff', color: 'white', padding: '0.5rem', borderRadius: '4px' }}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills