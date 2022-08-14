import React from 'react'

import Box from 'components/Box/Box'
import styles from './Main.module.scss'
import FormField from 'components/FormField/FormField'

const Main = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [ready, setReady] = React.useState(false);
    const [tags, setTags] = React.useState('');
    
    const generate = () => {
        setTags(`
            <!-- Primary -->
            <title>${title}</title>
            <meta name="title" content="${title}">
            <meta name="description" content="${description}">
            <meta name="author" content="${author}">
            
            <!-- Facebook -->
            <meta property="og:url" content="https://yoursite.com/">
            <meta property="og:title" content="${title}">
            <meta property="og:description" content="${description}">
            <meta name="og:author" content="${author}">
            <meta property="og:type" content="website">
            <meta property="og:image" content="">
            
            <!-- Twitter -->
            <meta property="twitter:url" content="https://yoursite.com/">
            <meta property="twitter:title" content="${title}">
            <meta property="twitter:description" content="${description}">
            <meta property="twitter:card" content="summary_large_image">
            <meta property="twitter:image" content="">
        `);

        setReady(true);
    }

  return (
    <div className={styles.wrapper}>
        <Box>
            <h1 className={styles.title}>GENERATE META TAGS FOR FREE</h1>

            {!ready ? (
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
                        <button onClick={generate} className={styles.button}>Generate</button>
                    </div>
                </div>
            ) : (
                <div>
                    <pre>
                        <code className="language-html">{tags}</code>
                    </pre>
                </div>
            )}
        </Box>
    </div>
  )
}

export default Main