import React from 'react'

import Box from 'components/Box/Box'
import styles from './Main.module.scss'
import FormField from 'components/FormField/FormField'

const Main = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [author, setAuthor] = React.useState('');
    

  return (
    <div className={styles.wrapper}>
        <Box>
            <h1 className={styles.title}>GENERATE META TAGS FOR FREE</h1>

            <div>
                <FormField 
                    label="Website Title"
                    placeholder="My website"
                    value={title}
                    onChange={setTitle}
                />

                <FormField
                    label="Autor"
                    placeholder="@Revku"
                    value={author}
                    onChange={setAuthor}
                />

                <FormField
                    label="Description"
                    placeholder="My website description"
                    value={description}
                    onChange={setDescription}
                    isArea
                />

                <div className={styles.buttons}>
                    <button className={styles.button}>Generate</button>
                </div>
            </div>
        </Box>
    </div>
  )
}

export default Main