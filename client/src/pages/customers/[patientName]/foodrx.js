import React, { useEffect,useState } from 'react'
import Detail_navbar from 'src/components/customer/detail-navbar'
import RXFood from 'src/components/customer/details/RXFood'
import { patient_name } from '.'
import { chartBoolList } from 'src/components/customer/PageTable'
import { foodrxData } from 'src/components/customer/PageTable'
import { useRouter } from 'next/router'



const Foodrx = (props) => {
  const [foodrxData,setFoodrxData] = useState();

  useEffect(() => {
    async function getData(){
      const firstname = sessionStorage.getItem('currPatient');
      const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({firstName:firstname})
      };
      const data = await fetch('http://localhost:4000/patientDetails/foodrxData', requestOptions)
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
      setFoodrxData(data);
      return data;
    };
    getData();
  },[])

  if (foodrxData!=undefined){
    console.log(foodrxData)
    const macroDistSeries = foodrxData.macronutrientsPct;
    const avgPlateBreakfastSeries = foodrxData.avgPlateBreakfast;
    const avgPlateLunchSeries = foodrxData.avgPlateLunch;
    const avgPlateDinnerSeries = foodrxData.avgPlateDinner;
    const calorieSeries = foodrxData.calorieDailySum;
    const carboSeries = foodrxData.carbDailySum;
    const proteinSeries = foodrxData.proteinPct;
    const fatTargetPct = foodrxData.fatTargetPct.fat_ratio_pct_of_target;
    const fatSeries = foodrxData.fatFreq;
    const grainSeries = foodrxData.grainFreq;
    const avgCarbo = foodrxData.avgCarbo;
    const avgCalorie = foodrxData.avgcal;
    const totalCarbo = foodrxData.totalCarbo;
    const totalCalorie = foodrxData.totalCalorie;
    const avgProtein = foodrxData.proteinAvg;
    const numDays = foodrxData.numDays;
    const datePeriods = foodrxData.datePeriods;
    const micronutrients = foodrxData.micronutrients;
    const n_meals_items = foodrxData.mealItemsCount;
    const mealsCount = foodrxData.mealsCount;
    


    return (
      <div>
          <Detail_navbar firstName={foodrxData.firstName} lastName={foodrxData.lastName}/>
          <RXFood firstName={foodrxData.firstName} lastName={foodrxData.lastName} avgcal={avgCalorie} calorieTotal={totalCalorie}
          avgCarbo={avgCarbo} totalCarbo={totalCarbo} proteinAvg={avgProtein} nDays={numDays} fatRatio={fatTargetPct}
          fatSeries={fatSeries} macroSeries={macroDistSeries} avgBreakfastSeries={avgPlateBreakfastSeries} 
          avgLunchSeries={avgPlateLunchSeries}  avgDinnerSeries={avgPlateDinnerSeries}
          calSeries={calorieSeries} carbSeries={carboSeries} mealsCount={mealsCount}
          proteinSeries={proteinSeries} avgGrainSeries={grainSeries} 
          datePeriods={datePeriods} micronutrients={micronutrients} itemCount={n_meals_items}/>
      </div>
    )
  }else{
    return null;
  }
  
}

export default Foodrx