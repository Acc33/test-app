import React, {useEffect,useState} from 'react'
import { useRouter } from 'next/router';
import GarminHRLineChart from 'src/components/customer/charts/GarminHRLineChart';
import GarminHRGrid from 'src/components/customer/details/GarminHRGrid';
import GarminNavbar from 'src/components/customer/details/GarminNavbar';
import GarminHRList from 'src/components/customer/details/GarminHRList';

const Heartrate = (props) => {
    const [period,setPeriod] = useState('4w')
    const handlePeriodState = (period) => {
        setPeriod(period);
        props.changeState(period);
    };
    
    const date = props.data.healthSummary.map(row => row['calendardate']);
    const restHR= props.data.healthSummary.map(row => row['restingheartrateinbeatsperminute']);
    const maxHR = props.data.healthSummary.map(row => row['maxheartrateinbeatsperminute'])

    const data = [];
    for (let i=0;i<date.length;i++){
        data.push({date:date[i],restHR:restHR[i],highHR:maxHR[i]});
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
                <GarminNavbar getPeriod={handlePeriodState} type={'heartrate'}/>
            </div>
            <div style={{marginBottom:'1rem'}}>
                <GarminHRGrid data={subData} />
            </div>
            <div style={{marginBottom:'1rem'}}>
                <GarminHRLineChart data={subData} />
            </div>
            
        </div>
    )
}

export default Heartrate