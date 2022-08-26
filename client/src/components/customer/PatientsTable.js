import React from 'react'
import { PageTable } from './PageTable'

const PatientsTable = (props) => {
    if (props.patients == undefined){
        return null
    }else{
        console.log('xxxxx')
        return (
            <PageTable patients={props.patients}/>
        )
    }
}

export default PatientsTable