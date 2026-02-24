import React from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.jsx'
import styles from './Experience.module.css'

const Experience = () => {
  const [ref, isVisible] = useScrollReveal()

  const experienceData = [
    {
      id: 1,
      role: 'Front-End Developer',
      company: 'Elevvo',
      period: '2026 - Present',
      description: 'Working as an intern with front-end development projects, building responsive web applications using React, JavaScript, and modern CSS frameworks. Collaborating with cross-functional teams to deliver high-quality user experiences.'
    }
  
  ]

  return (
    <section className={styles.experienceSection} ref={ref}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.timeline}>
          {experienceData.map((exp, index) => (
            <div 
              key={exp.id} 
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.card}>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
