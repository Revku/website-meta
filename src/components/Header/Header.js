import React from 'react'

import projectLogo from 'assets/project-logo.svg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div>
        <img src={projectLogo} alt="Website Meta Logo" className={styles.logo} />
    </div>
  )
}

export default Header