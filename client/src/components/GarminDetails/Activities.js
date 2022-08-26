import React, {useState} from 'react'
import GarminActivityList from 'src/components/customer/details/GarminActivityList';
import GarminNavbar from 'src/components/customer/details/GarminNavbar';
import PageDataTable from '../customer/details/PageDataTable';


const Activities = (props) => {
    const [period,setPeriod] = useState('4w')
    const handlePeriodState = (period) => {
        setPeriod(period);
        props.changeState(period);
    };
    console.log(props.data)
    const date = props.data.healthSummary.map(row => row['calendardate']);
    const activityType = props.data.activitySummary.map(row => row['activitytype']);
    const duration = props.data.activitySummary.map(row => row['durationinseconds']);
    const distance = props.data.activitySummary.map(row => row['distanceinmeters']);
    const activeCal = props.data.calorieSummary.map(row => row['activekilocalories']);
    const bmrCal = props.data.calorieSummary.map(row => row['bmrkilocalories']);
    


    const data = [];
    for (let i=0;i<date.length;i++){
        data.push({date:date[i],activityType:activityType[i],calorie:parseInt(activeCal[i])+parseInt(bmrCal[i]),duration:duration[i],distance:distance[i]});
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

    const activity_cols = [
        {name:'Date', selector:row=>row.date, sortable:true, right:true},
        {name:'Activity Type', selector:row=>row.activityType, sortable:true, right:true},
        {name:'Total Calories (KCAL)', selector:row=>row.calorie, sortable:true, right:true},
        {name:'Duration (Mins)', selector:row=>row.duration, sortable:true, right:true},
        {name:'Distance (Ms)', selector:row=>row.distance, sortable:true, right:true},
    ]

    return (
        <div>
            <div style={{marginBottom:'1rem'}}>
                <GarminNavbar getPeriod={handlePeriodState} type={'activity'}/>
            </div>
            <div style={{marginBottom:'1rem'}}>
                <PageDataTable cols={activity_cols} data={subData} pagination={true} 
                        placeHolderText={'date'} filterCol={'date'} title={'Activities List'}/>
            </div>
            
        </div>
    )
}

export default Activities