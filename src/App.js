import React from 'react'
import styles from 'styles/App.module.scss'
import 'styles/Global.scss'

import Header from 'components/organisms/Header/Header'
import Main from 'components/organisms/Main/Main'
import Footer from 'components/organisms/Footer/Footer'

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