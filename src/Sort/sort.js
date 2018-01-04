import React from 'react'
import styles from './sort.css'
import {REF_sortConfig} from '../constants'

const Sort = (props) => {
    return (
        <div className={styles.container}>
            <span>Sort By: </span>
            <select onChange={props.onUpdate}>
                {
                    REF_sortConfig.map(config => {
                        return <option key={config.id} data-field={config.field} data-order={config.order} value={config.display}>
                                    {config.display}
                                </option>
                    })
                }
            </select>
        </div>
    )
}

export default Sort