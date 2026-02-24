import React from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.jsx'
import styles from './Profile.module.css'
import profilepic from '../../asset/profilepic.jpg'
import locationIcon from '../../asset/placeholder.png'
import emailIcon from '../../asset/gmail.png'
import resumePdf from '../../asset/ENITAN RESUME.pdf'

const Profile = () => {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className={styles.profileSection} ref={ref}>
      <div className={`${styles.profileContainer} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.profileImage}>
          <div className={styles.imagePlaceholder}>
            {<img src={profilepic} alt="Profile" /> }
            {/* <span>Your Photo</span> */}
          </div>
        </div>

        <div className={styles.profileInfo}>
          <h1 className={styles.name}>Audu Israel Enitan</h1>
          <h2 className={styles.position}>Front-End Developer</h2>
          
          <div className={styles.aboutMe}>
            <p>
              Passionate front-end developer with expertise in building modern, 
              responsive web applications. I love creating intuitive user interfaces 
              and bringing designs to life with clean, efficient code.
            </p>
          </div>

          <div className={styles.details}>
            <div className={styles.detail}>
              <img className={styles.iconImage} src={locationIcon} alt="Location" />
              <span>Osun, Nigeria</span>
            </div>
            <div className={styles.detail}>
              <img className={styles.iconImage} src={emailIcon} alt="Email" />
              <a href="mailto:israelordis.enitan@gmail.com">israelordis.enitan@gmail.com</a>
            </div>
          </div>

          <a 
            href={resumePdf}
            className={styles.cvButton}
            download
          >
            <span className={styles.downloadIcon}>⬇</span>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Profile
