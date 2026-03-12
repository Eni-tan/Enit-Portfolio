
import useScrollReveal from '../../hooks/useScrollReveal.jsx'
import styles from './Skills.module.css'

const Skills = () => {
  const [ref, isVisible] = useScrollReveal()

  const skills = [
    { name: 'React / Next.js', percentage: 84 },
    { name: 'TypeScript / JavaScript', percentage: 84 },
    { name: 'React Native', percentage: 60 },
    { name: 'CSS / Tailwind / MUI', percentage: 75 },
    { name: 'Supabase', percentage: 80 },
  ]

  return (
    <section className={styles.skillsSection} ref={ref}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={styles.skillItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercentage}>{skill.percentage}%</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={`${styles.progressFill} ${isVisible ? styles.animate : ''}`}
                  style={{ 
                    '--target-width': `${skill.percentage}%`,
                    animationDelay: `${index * 0.15}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
