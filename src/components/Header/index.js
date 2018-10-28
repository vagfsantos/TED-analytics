import React from 'react'

import styles from './header.styl'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <h1>
        <span className={styles.projectFirstName}>TED</span>
        <span className={styles.projectLastName}>analytics</span>  
      </h1>
    </div>
  </header>
)

export default Header