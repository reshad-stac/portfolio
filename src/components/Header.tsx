import React from 'react'

interface HeaderProps {
  setActiveSection: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ setActiveSection }) => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <li><button onClick={() => setActiveSection('about')}>About</button></li>
          <li><button onClick={() => setActiveSection('skills')}>Skills</button></li>
          <li><button onClick={() => setActiveSection('projects')}>Projects</button></li>
          <li><button onClick={() => setActiveSection('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header