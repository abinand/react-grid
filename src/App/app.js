import React from 'react'
import uuidv4 from 'uuid/v4' // for unique ids
import styles from './app.css'
import Person from '../Person/person'
import Filter from '../Filter/filter'
import Sort from '../Sort/sort'
import {KEYS_Ord, KEYS_Sort, objComparer, fakeDelay} from '../constants'
import api from '../dataApi' // json data

class App extends React.Component {
    constructor(args){
        super(args)
        this.state = {
            loaded: false,
            apiData: {}, 
            displayData: {},
            lastSort: KEYS_Sort.default,
            lastOrder: KEYS_Ord.asc
        }
        this.filterData = this.filterData.bind(this) 
        this.sortData = this.sortData.bind(this)
    }

    componentDidMount(){  
        //simulate api call
        api
        .then(fakeDelay(1000))
        .then(response => {
            const preload = { // assign unique keys to the json array 
                data: response.data.map(personElem => {
                    return Object.assign({}, personElem, { id: `${name}-${uuidv4()}`})
                })
            }
            this.setState({
                apiData: JSON.parse(JSON.stringify(preload)), // deep copy to avoid reference
                displayData: JSON.parse(JSON.stringify(preload)), //deep copy
                loaded: true
            })
        })
    }

    sortData(event){
        const {field, order} = event.target.selectedOptions[0].dataset 
        if(field == null){ // == for null or undefined
            const idList = this.state.displayData.data.map(item => item.id)
            // reset sort order to default/featured but retain filtered values
            const resetValues = this.state.apiData.data.filter(item => idList.includes(item.id))
            const newDisplayData = Object.assign({}, {data: resetValues})
            this.setState({lastOrder: KEYS_Ord.asc, lastSort: KEYS_Sort.default, displayData:newDisplayData})
        }
        else{
            const sortedData = this.state.displayData.data.sort(objComparer(field)(order))
            const sortedObj = Object.assign({}, {data: sortedData})
            this.setState({lastOrder: order, lastSort: field, displayData: sortedObj})
        }
    }

    filterData(event) {
        const {name, value} = event.target
        const {apiData, lastSort, lastOrder} = this.state
        const filteredData = apiData.data.filter((item) => {
            return item[name] === value? true: false
        }).sort( // restore previous sort order
            objComparer(lastSort)(lastOrder)
        )
        const newDisplayData = Object.assign({}, {data: filteredData})
        this.setState({displayData: newDisplayData})
    }

    render(){
        const {apiData, displayData, loaded} = this.state
        if(!loaded){
            return (
                <div className={styles.loading}> Loading ... </div>
            )
        }
        return (
        <div className={styles.container}>
            <div className={styles.sidepanel}>
                <Filter onUpdate={this.filterData} categories={apiData.data.map(person => person.category)}/>
            </div>
            <div className={styles.center}>
                <Sort onUpdate={this.sortData}/>
                { displayData.data.map(person => <Person key={person.id} info={person}/>) }
            </div>
        </div>
        )
    }
}

export default App