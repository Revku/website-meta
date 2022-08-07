import React from 'react'
import styles from 'styles/App.module.scss'
import 'styles/Global.scss'

import Box from 'components/Box/Box'
import Header from 'components/Header/Header'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Box>
        <h1>Hello World</h1>
      </Box>
      <div>
        <p>Footer</p>
      </div>
    </div>
  )
}

export default App