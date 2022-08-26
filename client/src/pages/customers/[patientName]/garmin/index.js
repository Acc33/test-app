import React, { useEffect, useState } from 'react'
import Detail_navbar from 'src/components/customer/detail-navbar'
import { patient_name } from '../index'
import { garminData } from 'src/components/customer/PageTable'
import { Garmin } from 'src/components/customer/details/Garmin'
import { useRouter } from 'next/router'

const UserGarmin = () => {

  const [garminData,setGarminData]=useState();

  useEffect(() => {
    const firstname = sessionStorage.getItem('currPatient')
    async function getData(){
      const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({firstName:firstname})
      };
      const data = await fetch('http://localhost:4000/patientDetails/garminData', requestOptions)
      .then(res => {
          if (res.ok){
              return res.json();
          }
          if(!res || !res.ok || res.status >= 400){
              return;
          }
      })
      .then(data => {
          if (data){
              return data;
          }
      })
      setGarminData(data);
      return data;
    };
    getData();
  },[])

  if (garminData!=undefined){
    const getDataAvg = (table,category) => {
      var total = 0;
      var item;
      for (let i=0;i<table.length;i++){
        item = table[i];
        total = total + parseInt(item[category]);
      }
      var avg = parseInt(total/(table.length));
      return avg
    }
  
    const secToMin = (val) => {
      return parseInt(val/60);
    }
    const getRankCategory = (val) => {
      if (val<5000){
        return 'Sedentary';
      }else if(5000 <= val < 7500){
        return 'Low Active'
      }else if(7500 <= val < 10000){
        return 'Somewhat Active'
      }else if(10000 <= val < 12500){
        return 'Active'
      }else{
        return 'Highly Active'
      }
    }
    const overall_info = {};
    var avgSteps = getDataAvg(garminData.healthSummary,"steps");
    overall_info.avgSteps = avgSteps;
    var stepsCategory = getRankCategory(avgSteps);
    overall_info.stepsCategory = stepsCategory;
    var avgIntenseMins = secToMin(getDataAvg(garminData.healthSummary,"vigorousintensitydurationinseconds"));
    overall_info.avgIntenseMins = avgIntenseMins;
    var avgIntenseMinsCategory = getRankCategory(avgIntenseMins);
    overall_info.avgIntenseMinsCategory = avgIntenseMinsCategory;
    var avgActivityTime = secToMin(getDataAvg(garminData.activitySummary,"durationinseconds"));
    overall_info.avgActivityTime = avgActivityTime;
    var avgCalorie = getDataAvg(garminData.calorieSummary,"activekilocalories");
    overall_info.avgCalorie = avgCalorie;
    var avgRestHR = getDataAvg(garminData.healthSummary,"restingheartrateinbeatsperminute");
    overall_info.avgRestHR = avgRestHR;
    var avgHighHR = getDataAvg(garminData.healthSummary,"maxheartrateinbeatsperminute");
    overall_info.avgHighHR = avgHighHR;
  
    return (
      <div>
          <Detail_navbar firstName={garminData.firstName} lastName={garminData.lastName}/>
          <Garmin overall_info={overall_info} data={garminData} name={garminData.firstName+garminData.lastName}/>
      </div>
    )
  }else{
    return null;
  }
}


export default UserGarmin