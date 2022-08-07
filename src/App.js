import React from 'react'
import styles from 'styles/App.module.scss'
import 'styles/Global.scss'

import Header from 'components/Header/Header'
import Main from 'components/Main/Main'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <div>
        <p>Footer</p>
      </div>
    </div>
  )
}

export default App