import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import GarminNavbar from 'src/components/customer/details/GarminNavbar';
import { GoalBarChart } from 'src/components/customer/charts/GoalBarchart';
import GarminIntensityGrid from 'src/components/customer/details/GarminIntensityGrid';
import GarminIntensityList from 'src/components/customer/details/GarminIntensityList';

const Intensity = (props) => {
    
    const [period,setPeriod] = useState('4w')
    const handlePeriodState = (period) => {
        setPeriod(period);
        props.changeState(period);
    };
    
    const date = props.data.healthSummary.map(row => row['calendardate']);
    const intenseDuration = props.data.healthSummary.map(row => row['vigorousintensitydurationinseconds']);
    const moderateDuration = props.data.healthSummary.map(row => row['moderateintensitydurationinseconds']);

    
    const data = [];
    for (let i=0;i<date.length;i++){
        data.push({date:date[i],moderateDuration:moderateDuration[i],intenseDuration:intenseDuration[i]});
    }
    data.sort((a,b) => (a.date>b.date)?1:-1);
    
    let subData;
    if (period=='7d'){
        subData = data.slice(0,7);
    }else if(period=='4w'){
        subData = data.slice(0,30);
    }else{
        subData = data;
    }


    return (
        <div>
            <div style={{marginBottom:'1rem'}}>
                <GarminNavbar getPeriod={handlePeriodState} type={'intensity'}/>
            </div>
            <div style={{marginBottom:'1rem'}}>
                <GarminIntensityGrid data={subData} />
            </div>
            <div style={{marginBottom:'1rem'}}>
                <GoalBarChart data={subData} goal={80} color={props.color}/>
            </div>
            <div>
                <GarminIntensityList data={subData} goal={80}/>
            </div>
        </div>
    )
}

export default Intensity