import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

import Box from 'components/Box/Box'
import styles from './Main.module.scss'
import FormField from 'components/FormField/FormField'

import { generateMetaTags } from './metatags';
import Button from 'components/Button/Button';

const Main = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [url, setUrl] = React.useState('');
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

        if (!url) {
            setErrors({...errors, url: true});
            return;
        }

        setTags(generateMetaTags(title, description, author, url));
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
                        label="Author"
                        placeholder="@Revku"
                        value={author}
                        onChange={setAuthor}
                    />
                    {errors.author && <p className={styles.error}>Please enter an author</p>}

                    <FormField
                        label="Website URL"
                        placeholder="https://yoursite.com"
                        value={url}
                        onChange={setUrl}
                    />
                    {errors.url && <p className={styles.error}>Please enter an url</p>}

                    <FormField
                        label="Description"
                        placeholder="My website description"
                        value={description}
                        onChange={setDescription}
                        isArea
                    />
                    {errors.description && <p className={styles.error}>Please enter a description</p>}

                    <div className={styles.buttons}>
                        <Button onClick={generate}>Generate</Button>
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
                     <div className={styles.buttons}>
                        <Button onClick={() => setReady(false)}>Generate another</Button>
                    </div>
                </div>
            )}
        </Box>
    </div>
  )
}

export default Main