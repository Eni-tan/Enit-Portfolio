import React from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.jsx'
import styles from './Education.module.css'

const Education = () => {
  const [ref, isVisible] = useScrollReveal()

  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Civil Engineering',
      institution: 'Obafemi Awolowo University',
      period: '2021 - 2027',
      description: 'Focused on specializing in strucutral engineer.'
    },
    {
      id: 2,
      degree: 'High School Diploma',
      institution: 'ICSSS',
      period: '2014 - 2018',
      description: 'Graduated with honors.'
    },
  
  ]

  return (
    <section className={styles.educationSection} ref={ref}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.timeline}>
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.card}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <h4 className={styles.institution}>{edu.institution}</h4>
                <p className={styles.period}>{edu.period}</p>
                <p className={styles.description}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
