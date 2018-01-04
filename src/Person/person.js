import React from 'react'
import styles from './person.css'
import {REF_priority} from '../constants'

const Person = (props) => {
    const {name, age, category, priority} = props.info
    
    return <div className={styles.container} style={{backgroundColor: REF_priority[priority]}}>
        <div>
            <h2  className={styles.name}>{name}</h2>
            <div className={styles.age}>{age}</div>
            <div className={styles.category}>{category}</div>
        </div>
    </div>
}

export default Person