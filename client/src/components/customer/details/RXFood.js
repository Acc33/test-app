import React, {useState,useEffect} from 'react'
import Collapsible from '../Collapsible'
import { Piechart } from '../charts/Piechart'
import { HorizontalBarChart } from '../charts/HorizontalBarChart';
import PageDataTable from './PageDataTable';
import RXFoodSummary from './RXFoodSummary';



const getValues = (obj,multiply) => {
    if (multiply==true){
        var value = Object.values(obj[0]).map(i => (Number(i)*100));
        value.shift()
        return value
    }else{
        var value = Object.values(obj[0]);
        value.shift()
        return value
    }  
};


const getDataBySession = (session_id,rawData) => {
    var validData = [];
    for (let i=0;i<rawData.length;i++){
        if (rawData[i].session_id == session_id){
            validData.push(rawData[i])
        }
    }
    return validData;
};

const RXFood = (props) => {
    const [date,setDate] = useState(props.datePeriods[0].date_since.slice(0,10)+' to '+props.datePeriods[0].date_until.slice(0,10))
    const [sessionID, setSessionID] = useState('1')

    const getDateHandler = (selectedDate) =>{
        setDate(selectedDate);
    }
    
    useEffect(() => {
        if (date!=undefined){
            const startDate = date.split("to")[0].slice(0,10);
            for (let i=0;i<props.datePeriods.length;i++){
                const tempDate = props.datePeriods[i].date_since.slice(0,10)
                if (tempDate == startDate){
                    const session_id = props.datePeriods[i].session_id;
                    setSessionID(session_id);
                    console.log(sessionID)
                    break
                }
            }   
        }
    }, [date])

    const name = props.firstName + ' ' + props.lastName;
    const datePeriods = props.datePeriods;
    const avgcal = getValues(getDataBySession(sessionID,props.avgcal),false);
    const avgCarbo = getValues(getDataBySession(sessionID,props.avgCarbo),false);
    const avgProtein = parseInt(getValues(getDataBySession(sessionID,props.proteinAvg),false));
    const numDays = getValues(getDataBySession(sessionID,props.nDays),false);
    const macroLabels = ['Fat','Carbohydrates','Protein'];
    const macroTempSeries = getValues(getDataBySession(sessionID,props.macroSeries),false);
    const fatTotalPct = macroTempSeries[0]+macroTempSeries[1];
    const macroSeries = macroTempSeries.slice(2);
    macroSeries.unshift(fatTotalPct);
    const calLabels = ['Morning','Lunchtime','Afternoon','Dinner','Evening'];
    const calSeries = getValues(getDataBySession(sessionID,props.calSeries),false);
    const breakfastLabels = ['Protein','Fruits','Vegetables','Grains'];
    const breakfastSeries = getValues(getDataBySession(sessionID,props.avgBreakfastSeries),true);
    const lunchLabels = ['Protein','Fruits','Vegetables','Grains'];
    const lunchSeries = getValues(getDataBySession(sessionID,props.avgLunchSeries),true);
    const dinnerLabels = ['Protein','Fruits','Vegetables','Grains'];
    const dinnerSeries = getValues(getDataBySession(sessionID,props.avgDinnerSeries),true);
    const avgGrainLabels = ['Whole Grains','Refined Grains']
    const avgGrainSeries = getValues(getDataBySession(sessionID,props.avgGrainSeries),false);
    const carbLabels = ['Morning','Lunchtime','Afternoon','Dinner','Evening'];
    const carbSeries = getValues(getDataBySession(sessionID,props.carbSeries),false);
    const proteinLabels = ['Red Meat','Poultry','Seafood','Plant Protein','Dairy and Egg']
    const proteinSeries = getValues(getDataBySession(sessionID,props.proteinSeries),false);
    const fatLabels = ['Healthy Fats','Unhealthy Fats']
    const fatSeries = getValues(getDataBySession(sessionID,props.fatSeries),false);
    const avgFat = parseInt(((((macroSeries[0] + macroSeries[1])*0.01)*avgcal)/9));
    const mealsCount = getDataBySession(sessionID,props.mealsCount)[0];
    console.log(mealsCount)
    const itemCount = getDataBySession(sessionID,props.itemCount)[0].n_meals_items;

    const micro_data_cols = [
        {name:'Nutrient', selector:row=>row.nutrient, sortable:true, right:true},
        {name:'Avg Daily Intake', selector:row=>row.avg_daily_intake, sortable:true, right:true},
        {name:'Min Daily Intake', selector:row=>row.min_daily_intake, sortable:true, right:true},
        {name:'Max Daily Intake', selector:row=>row.max_daily_intake, sortable:true, right:true},
        {name:'Per Thousand Kcal', selector:row=>row.per_thousand_kcal, sortable:true, right:true},
    ]

    const micro_data_rows = getDataBySession(sessionID,props.micronutrients);
    let sodium, calcium, iron, potassium, fibre;

    const macroMinMax = micro_data_rows.slice(0,3);
    for (let i=0;i<micro_data_rows.length;i++){
        for (let x in micro_data_rows[i]){
            if (typeof micro_data_rows[i][x] == 'number'){
                micro_data_rows[i][x] = micro_data_rows[i][x].toFixed(2)
            }
            if (x == 'nutrient'){
                micro_data_rows[i][x] = micro_data_rows[i][x].charAt(0).toUpperCase()+micro_data_rows[i][x].slice(1);
                if (micro_data_rows[i][x].includes('Vitamin')){
                    console.log(micro_data_rows[i][x].charAt(8))
                    micro_data_rows[i][x] = micro_data_rows[i][x].slice(0,8) +micro_data_rows[i][x].charAt(8).toUpperCase() + micro_data_rows[i][x].slice(9);
                }
            }
            if (x == 'unit'){
                if (micro_data_rows[i]['nutrient'].includes('(') == false){
                    micro_data_rows[i]['nutrient'] = micro_data_rows[i]['nutrient']+' ('+micro_data_rows[i]['unit']+')'
                }
                
            }
        }
    }
    
    for (let i=0;i<micro_data_rows.length;i++){
        if (micro_data_rows[i]['nutrient'].includes('Fiber')){
            fibre = micro_data_rows[i].avg_daily_intake;
            fibre = parseFloat(fibre).toFixed(0)
        };
        if (micro_data_rows[i]['nutrient'].includes('Sodium')){
            sodium = micro_data_rows[i].avg_daily_intake;
        };
        if (micro_data_rows[i]['nutrient'].includes('Calcium')){
            calcium = micro_data_rows[i].avg_daily_intake;
        };
        if (micro_data_rows[i]['nutrient'].includes('Iron')){
            iron = micro_data_rows[i].avg_daily_intake;
        };
        if (micro_data_rows[i]['nutrient'].includes('Potassium')){
            potassium = micro_data_rows[i].avg_daily_intake;
        };
    };


    micro_data_rows = micro_data_rows.filter(row => {
        if (row.nutrient.includes('Protein') || row.nutrient.includes('Carbohydrate') || row.nutrient.includes('Fiber')){
            return false
        }
        return true
    })


    return (

        <div>
            <RXFoodSummary name={name} calories={avgcal} avgCarbohydrates={avgCarbo} avgProtein={avgProtein} avgFat={avgFat} mealsCount={mealsCount} session={sessionID}
            avgSodium={sodium} avgCalcium={calcium} avgIron={iron} avgPotassium={potassium} avgFibre={fibre} carboPct={macroSeries[1]} macroMinMax={macroMinMax}
            proteinPct={macroSeries[2]} fatPct={macroSeries[0]} date={date} itemCount={itemCount} numDays={numDays} getDate={getDateHandler} datePeriods={datePeriods}/>
            <div className="calories" style={{marginTop:'2rem'}}>
                <Collapsible label="Calories" color="#0FB4E4" >
                    <div className="calorie_row item_row">
                        <div className="desc">
                            <h2>Calorie Summary</h2>
                            <p>{name} consumed an average of {avgcal} kcal/day</p>
                        </div>
                        <div className="macro_dist">
                            <h3>Macronutrient Distribution Chart</h3>
                            <Piechart series={macroSeries} labels={macroLabels} />
                        </div>
                        <div className="calorie_dist">
                            <h3>Calorie Distribution Throughout the Day (kcal)</h3>
                            <HorizontalBarChart series={calSeries} categories={calLabels} />
                        </div>
                    </div>
                    <div className="avg_plate_row item_row">
                        <div className="desc">
                            <h2>Average Plate Summary</h2>
                            <p>This section summarizes the average food group distribution for {name} across breakfast,lunch, and dinner</p>
                            
                        </div>
                        <div className="avg_plate">
                            <h3 className="avg_text">Average Plate Breakfast</h3>
                            <Piechart series={breakfastSeries} labels={breakfastLabels} />
                        </div>
                        <div className="avg_plate">
                            <h3 className="avg_text">Average Plate Lunch</h3>
                            <Piechart series={lunchSeries} labels={lunchLabels} />
                        </div>
                        <div className="avg_plate">
                            <h3 className="avg_text">Average Plate Dinner</h3>
                            <Piechart series={dinnerSeries} labels={dinnerLabels} />
                        </div>
                    </div>
                </Collapsible>
            </div>
            <div className="carbohydrates">
                <Collapsible label="Carbohydrates" color="#00A36C">
                <div className="carboRow item_row">
                    <div className="desc">
                        <h2>Carbohydrates Summary</h2>
                        <p>{name} consumed an average of {avgCarbo} g/day (Min: {parseInt(macroMinMax[1].min_daily_intake)}g, Max: {parseInt(macroMinMax[1].max_daily_intake)})</p>
                        <p>{name} consumed an average of {fibre} g fibre/day (Min: {parseInt(macroMinMax[2].min_daily_intake)}g, Max: {parseInt(macroMinMax[2].max_daily_intake)})</p>
                    </div>
                    <div className="avg_grain_freq">
                        <h3>Intake of Whole vs. Refined Grains (%)</h3>
                        <Piechart series={avgGrainSeries} labels={avgGrainLabels} />
                    </div>
                    <div className="grain_dist">
                        <h3>Distribution of Carbohydrates throughout the Day (grams)</h3>
                        <HorizontalBarChart series={carbSeries} categories={carbLabels}/>
                    </div>

                </div>
                </Collapsible>
            </div>
            <div className="protein">
                <Collapsible label="Protein" color="#D22B2B">
                    <div className="protein_row item_row">
                        <div className="desc">
                            <h2>Protein Summary</h2>
                            <p>{name} consumed an average of {avgProtein} g/day (Min: {parseInt(macroMinMax[0].min_daily_intake)}g, Max: {parseInt(macroMinMax[0].max_daily_intake)})</p>   
                        </div>
                        <div className="protein_freq">
                            <h3>Distribution of Protein Intake (%)</h3>
                            <Piechart series={proteinSeries} labels={proteinLabels} />
                        </div>
                    </div>
                </Collapsible>
            </div>
            <div className="fat">
                <Collapsible label="Fat" color="#E49B0F" >
                    <div className="fat_row item_row">
                        <div className="desc">
                            <h2>Fat Summary</h2>
                            <p>{name} consumed an average of {avgFat} g/day</p>
                            <p>{(fatSeries[0]).toFixed(1)}% came from unsaturated fats and {(fatSeries[1]).toFixed(1)}% came from saturated fats</p>
                        </div>
                        <div className="fat_freq">
                            <h3>Intake of Healthy vs. Unhealthy Fats (%)</h3>
                            <Piechart series={fatSeries} labels={fatLabels} />
                        </div>
                    </div>
                </Collapsible>
            </div>
            <div className="micronutrients">
                <Collapsible label="Micronutrients" color="#36454F">
                    <div className="micronutrients_row">
                        <PageDataTable cols={micro_data_cols} data={micro_data_rows} pagination={false} 
                        placeHolderText={'nutrient'} filterCol={'nutrient'} title={'Micronutrients List'}/>
                    </div>
                </Collapsible>
            </div>
        </div>
    )
}

export default RXFood