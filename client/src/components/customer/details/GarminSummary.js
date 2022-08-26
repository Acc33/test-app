import React, {useState} from 'react'
import Collapsible from '../Collapsible';

import Steps from 'src/components/GarminDetails/Steps';
import Intensity from 'src/components/GarminDetails/Intensity';
import Heartrate from 'src/components/GarminDetails/Heartrate';
import Activities from 'src/components/GarminDetails/Activities';


const GarminSummary = (props) => {
    const [stepPeriod,setStepPeriod] = useState('4w');
    const [intensityPeriod, setIntensityPeriod] = useState('4w');
    const [activityPeriod, setActivityPeriod] = useState('4w');
    const [hrPeriod, setHrPeriod] = useState('4w');

    const changeStepState = (state) => {
        setStepPeriod(state);
    }
    const changeIntensityState = (state) => {
        setIntensityPeriod(state);
    }
    const changeActivityState = (state) => {
        setActivityPeriod(state);
    }
    const changehrState = (state) => {
        setHrPeriod(state);
    }
   
    return (
        <div>
            <div>
                <Collapsible label="Steps Summary" color="#0FB4E4" >
                    <Steps data={props.data} changeState={changeStepState}/>
                </Collapsible>
            </div>
            <div>
                <Collapsible label="Intensity Summary" color="#00A36C" > 
                    <Intensity data={props.data} color={'#00A36C'} changeState={changeIntensityState}/>
                </Collapsible>
            </div>
            <div>
                <Collapsible label="Heart Rate Summary" color="#D22B2B" >
                    <Heartrate data={props.data} changeState={changehrState}/>
                </Collapsible>
            </div>
            <div>
                <Collapsible label="Activities Summary" color="#E49B0F" >
                    <Activities data={props.data} changeState={changeActivityState}/>
                </Collapsible>
            </div>
        </div>
    )
}

export default GarminSummary