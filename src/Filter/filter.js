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
    
    return <div className={styles.container}>
        <h4>Filter</h4>
        {
            uniqueCategories.map(option => {
                return wrapRadioBtn(option)
            })
        }
    </div>
}

export default Filter