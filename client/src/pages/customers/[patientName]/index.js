import React, {useState} from 'react';
import Detail_navbar from 'src/components/customer/detail-navbar';
import General from 'src/components/customer/details/General';
import { useRouter } from 'next/router';


export const PatientDetails = () => {
    
    const router = useRouter();
    console.log(router.query);
    const firstName = router.query.firstname;
    const lastName = router.query.lastname;
    
    const generalRadarSeries = [{
        name:'Summary category',
        data: [40,30,50,80,25,75,65,15,20,10],
    }];
    const generalRadarOptions = {
        chart:{
            height:200,
            width: 400,
            type: 'radar'
        },
        title: {
            text: 'General Info'
        },
        
        labels: ['EASA Emotional','EASA physical','Macronutrients','Caloric intake','Protein intake','Moderate-to-vigorous physical activity minutes','step count','light physical activity','Physical activity minutes','Physical functioning'] 
    };


    
    return (
        <div>
            <Detail_navbar firstName={firstName} lastName={lastName}/>
            <General series={generalRadarSeries} options={generalRadarOptions} />
        </div>
    )
}

export default PatientDetails;
