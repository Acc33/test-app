import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BasicBarChart from 'src/components/customer/charts/BasicBarChart'
import GarminNavbar from 'src/components/customer/details/GarminNavbar'
import GarminStepsGrid from 'src/components/customer/details/GarminStepsGrid'

const Steps = (props) => {
    const date = props.data.healthSummary.map(row => row['calendardate']);
    const distance = props.data.activitySummary.map(row => row['distanceinmeters']);
    const steps = props.data.healthSummary.map(row => row['steps'])


    const [period,setPeriod] = useState('4w')
    const handlePeriodState = (period) => {
        setPeriod(period);
        props.changeState(period);
    };

    const data = [];
    for (let i=0;i<date.length;i++){
        data.push({date:date[i],distance:distance[i],stepsCount:steps[i]});
    }
    data.sort((a,b) => (a.date>b.date)?1:-1);

    let subData;
    if (period=='7d'){
        subData = data.slice(0,7);
        subData.isNot7d = false;
    }else if(period=='4w'){
        subData = data.slice(0,30);
        subData.isNot7d = true;
    }else{
        subData = data;
        subData.isNot7d = true;
    }

    return (
        <div>
            <div style={{marginBottom:'1rem'}}>
                <GarminNavbar getPeriod={handlePeriodState} type={'steps'}/>
            </div>
            <div>
                <GarminStepsGrid data={subData}/>
            </div>
            <div style={{marginBottom:'1rem'}}>
                <BasicBarChart data={subData} color={'#0FB4E4'} text={'Steps Count'}/>
            </div>
        </div>
    )
}

export default Steps