import React from 'react'
import styles from './FormField.module.scss'

const FormField = ({ label, placeholder = label, isArea, value, onChange}) => {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>

        { isArea ? (
            <textarea 
                className={styles.input} 
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                style={{height: '150px'}}
            ></textarea>
        ) : (
            <input 
                className={styles.input} 
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        ) }

    </div>
  )
}

export default FormField