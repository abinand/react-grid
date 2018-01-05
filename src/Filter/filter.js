import React from 'react'
import styles from './filter.css'

const Filter = (props) => {
    const uniqueCategories = [... new Set(props.categories)].sort()
    const wrapRadioBtn = (option) => {
        return (
            <div className={styles.radio} key={option}>
                <input type = "radio" name="category" onClick={props.onUpdate} value={option}/> {option} 
            </div>
        )
    }
    
    return (
        <div className={styles.container}>
            <h4>Category Filter</h4>
            { uniqueCategories.map(option => wrapRadioBtn(option)) }
        </div>
    )
}

export default Filter