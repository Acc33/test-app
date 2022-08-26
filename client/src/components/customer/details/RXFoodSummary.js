import React from 'react'
import DateFilter from './DateFilter'


const RXFoodSummary = (props) => {
    return (
        <div style={{marginTop:'3rem', marginBottom:'3rem', display:'flex',justifyContent:'space-around'}}>
            <div className="dateSelect">
                <h1 style={{marginBottom:'1rem'}}>Nutrition Summary for {props.name}</h1>
                <h3>Meals Report</h3>
                <div style={{display:'flex', marginBottom:'2rem'}}>
                    <ul>
                        <li style={{marginRight:'3rem'}}><b>breakfast:</b> {parseInt(props.mealsCount.breakfast)*props.numDays[0]}</li>
                        <li><b>Dinner: </b>{parseInt(props.mealsCount.dinner)*props.numDays[0]}</li>
                    </ul>
                    <ul>
                        <li style={{marginRight:'3rem'}}><b>Lunch:</b> {parseInt(props.mealsCount.lunch)*props.numDays[0]}</li>
                        <li><b>Snacks:</b> {parseInt(props.mealsCount.snack)*props.numDays[0]}</li>
                    </ul> 
                </div>
                <DateFilter getDate={props.getDate} datePeriods={props.datePeriods} />
            </div>
            <div>
                <h1 style={{textAlign:'center'}}>Daily Averages for Session {props.session}</h1>
                <div className='nutrients' style={{display:'flex',justifyContent:'space-around'}}>
                    <div className="macronutrients" style={{marginRight:'4rem'}}>
                        <h2>Macronutrients</h2>
                        <ul className="macronutrients">
                            <li><b>Calories:</b> {props.calories} KCAL</li>
                            <li><b>Carbohydrates:</b> {props.avgCarbohydrates} grams ({props.carboPct}% of total calories)</li>
                            <li><b>Fibre: </b>{props.avgFibre} grams of fibre</li>
                            <li><b>Protein:</b> {props.avgProtein} grams ({props.proteinPct}% of total calories)</li>
                            <li><b>Fat:</b> {props.avgFat} grams ({props.fatPct}% of total calories)</li>
                        </ul> 
                    </div>
                    <div className="micronutrients">
                        <h2>Micronutrients</h2>
                        <ul className="micronutrients">
                            <li><b>Sodium:</b> {parseInt(props.avgSodium).toFixed(0)} mg</li>
                            <li><b>Calcium:</b> {parseInt(props.avgCalcium).toFixed(0)} mg</li>
                            <li><b>Iron:</b> {parseInt(props.avgIron).toFixed(0)} g</li>
                            <li><b>Potassium:</b> {parseInt(props.avgPotassium).toFixed(0)} mg</li>
                        </ul>  
                    </div>
                </div>
            </div>
        </div>
        )
}

export default RXFoodSummary