import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Detail_navbar = (props) => {
    const lightbuzz_path = '/customers/' + props.firstName + '/lightbuzz'
    const foodrx_path = '/customers/' + props.firstName + '/foodrx'
    const garmin_path = '/customers/' + props.firstName + '/garmin'
    const survey_path = '/customers/' + props.firstName + '/survey'
    const general_path = '/customers/' + props.firstName
    const name = props.firstName+' '+props.lastName;
    console.log(name)
    const router = useRouter();
    const redirect = (category) => {
        const pathname = '/customers/' + props.firstName + '/' +category;
        router.push({
            pathname:pathname,
            query:{'firstname':props.firstName,'lastname':props.lastName}
        },pathname)
    }
    return (

    <nav className="nav">
        <h1 className="title"> {name} </h1>
        <ul>
            <li>
                <a onClick={() => redirect('')}>General</a>
            </li>

            <li>
                <a onClick={() => redirect('lightbuzz')}>LightBuzz</a>
            </li>
        
            <li>
                <a onClick={() => redirect('foodrx')}>RXFood</a>
            </li>
            <li>
                <a onClick={() => redirect('garmin')}>Garmin</a>
            </li>
            
            <li>
                <a onClick={() => redirect('survey')}>Survey</a>
            </li>
        </ul>
    </nav>
  )
}

export default Detail_navbar;