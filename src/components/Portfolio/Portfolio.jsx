import React from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.jsx'
import styles from './Portfolio.module.css'
import enitCart from '../../asset/Enit-Cart.png'
import dashboard from '../../asset/Dashboard.png'
import jobtracker from '../../asset/Jobtracker-logo.png'
import CFI from '../../asset/CFIwebsite.png'
import Enit from '../../asset/Eni-ecommerce.png'
import Formpage from '../../asset/Formpage.png'
import Snack from '../../asset/Snack-hub.png'
import Binx from '../../asset/BinxAi.png'

const Portfolio = () => {
  const [ref, isVisible] = useScrollReveal()

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      role: 'Front-End Developer',
      description: 'A modern e-commerce platform with shopping cart, and admin dashboard.',
      link: 'https://example.com/project1',
      image: enitCart
    },
    {
      id: 2,
      name: 'Job Tracker Admin Dashboard',
      role: 'Front-End Developer',
      description: 'Analytics dashboard for job tracking with real-time data visualization.',
      link: 'https://elevvo-admin-dashboard.vercel.app',
      image: dashboard
    },
    {
      id: 3,
      name: 'Job-Tracker App',
      role: 'Frontend Developer',
      description: 'Collaborative task management tool with drag-and-drop functionality and team features.',
      link: 'https://elevvo-indutrial-level-project.vercel.app/',
      image: jobtracker
    },
    {
      id: 4,
      name: 'Charis Form App',
      role: 'Full-stack Developer',
      description: 'A mini website that get information and automatically fill it in google sheet.',
      link: 'https://charis-biodata-form.vercel.app/',
      image: CFI
    },
    {
      id: 5,
      name: 'Electronic Commerce Website',
      role: 'Front-End Developer',
      description: 'A responsive e-commerce website with product listings, cart functionality, and checkout process.',
      link: 'https://Quick-cart.vercel.app/',
      image: Enit
    },
    {
      id: 6,
      name: 'Snack-Hub App',
      role: 'Front-End Developer',
      description: 'Responsive web application for learning and managing snack recipes.',
      link: 'https://example.com/project6',
      image: Snack
    },
      {
      id: 7,
      name: 'Binx',
      role: 'Front-End Developer',
      description: 'Responsive web application for learning and managing snack recipes.',
      link: 'https://example.com/project6',
      image: Binx
    },
      {
      id: 8,
      name: 'Form-Page',
      role: 'Front-End Developer',
      description: 'Responsive web application for learning and managing snack recipes.',
      link: 'https://example.com/project6',
      image: Formpage
    },
   
  ]

  return (
    <section className={styles.portfolioSection} ref={ref}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.projectImage}>
                {project.image ? (
                  <img src={project.image} alt={project.name} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>Project {project.id}</span>
                  </div>
                )}
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectRole}>{project.role}</p>
                <p className={styles.projectDescription}>{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.viewButton}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
