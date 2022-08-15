import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

import Box from 'components/Box/Box'
import styles from './Main.module.scss'
import FormField from 'components/FormField/FormField'

import { generateMetaTags } from './metatags';

const Main = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [ready, setReady] = React.useState(false);
    const [tags, setTags] = React.useState('');
    const [errors, setErrors] = React.useState({});
    
    const generate = () => {
        setErrors({});

        if (!title) {
            setErrors({...errors, title: true});
            return;
        }

        if (!author) {
            setErrors({...errors, author: true});
            return;
        }

        if (!description) {
            setErrors({...errors, description: true});
            return;
        }

        setTags(generateMetaTags(title, description, author));
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
                    {errors.title && <p className={styles.error}>Please enter a title</p>}

                    <FormField
                        label="Autor"
                        placeholder="@Revku"
                        value={author}
                        onChange={setAuthor}
                    />
                    {errors.author && <p className={styles.error}>Please enter an author</p>}

                    <FormField
                        label="Description"
                        placeholder="My website description"
                        value={description}
                        onChange={setDescription}
                        isArea
                    />
                    {errors.description && <p className={styles.error}>Please enter a description</p>}

                    <div className={styles.buttons}>
                        <button onClick={generate} className={styles.button}>Generate</button>
                    </div>
                </div>
            ) : (
                <div>
                    <CopyBlock
                        language={'html'}
                        text={tags}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines
                        codeBlock
                    />
                </div>
            )}
        </Box>
    </div>
  )
}

export default Main