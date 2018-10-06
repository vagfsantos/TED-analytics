import React from 'react'

import styles from './header.styl'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <h1>
        <strong>TED</strong>
        <span>analytics</span>  
      </h1>
    </div>
  </header>
)

export default Header