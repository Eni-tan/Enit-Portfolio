import React from 'react'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Education from './components/Education/Education.jsx'
import Experience from './components/Experience/Experience.jsx'
import Skills from './components/Skills/Skills.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <AnimatedBackground />
      <NavBar />
      <main className={styles.mainContent}>
        <section id="about">
          <Profile />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          {/* <Contact /> */}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
