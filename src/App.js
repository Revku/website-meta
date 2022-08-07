import React from 'react'
import styles from 'styles/App.module.scss'
import 'styles/Global.scss'

import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import Footer from 'components/Footer/Footer'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App