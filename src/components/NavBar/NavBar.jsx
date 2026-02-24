import React, { useState } from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    closeMenu()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#about" className={styles.logo} onClick={(e) => handleNavClick(e, 'about')}>
          Portfolio
        </a>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
