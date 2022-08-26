const express = require("express");
const router = express.Router();
const pool = require("../db");


router.post("/foodrxData", async (req,res) => {
    const foodrxData = {};

    var patientIDRow = await pool.query(
        "SELECT user_id, first_name, last_name FROM users u WHERE u.first_name = $1",
        [req.body.firstName]
    );
    const userID = patientIDRow.rows[0].user_id;
    const first_name = patientIDRow.rows[0].first_name;
    const last_name = patientIDRow.rows[0].last_name;
    foodrxData.firstName = first_name;
    foodrxData.lastName = last_name;
    console.log(userID)
    var group_user_idRow = await pool.query(
        'SELECT group_user_id FROM groupusers WHERE user_id = $1 AND group_id = $2',
        [userID,1]
    )
    const patientID = group_user_idRow.rows[0].group_user_id;

    var datePeriodRows = await pool.query(
        "SELECT session_id,date_since,date_until FROM foodrx_summary WHERE group_user_id = $1",
        [patientID]
    )
    if (datePeriodRows.rowCount>0){
        foodrxData.datePeriods = datePeriodRows.rows;
    }
    

    var numDaysRow = await pool.query(
        'SELECT session_id,n_days_with_data FROM foodrx_summary fs WHERE fs.group_user_id = $1',
        [patientID]
    )
    var numDays = numDaysRow.rows;
    foodrxData.numDays = numDays;

    var mealItemsCountRow = await pool.query(
        'SELECT session_id,n_meals_items FROM foodrx_summary fs WHERE fs.group_user_id = $1',
        [patientID]
    )
    if (mealItemsCountRow.rowCount>0){
        foodrxData.mealItemsCount = mealItemsCountRow.rows;
    }

    var macronutrientsPctRow = await pool.query(
        'SELECT session_id,unsaturated_fat,saturated_fat,carbohydrates,protein FROM foodrx_macro_pct_resp fmpr WHERE fmpr.group_user_id = $1',
        [patientID]
    );
    if (macronutrientsPctRow.rowCount>0){
        foodrxData.macronutrientsPct = macronutrientsPctRow.rows;
    }

    var mealCountsRow = await pool.query(
        'SELECT session_id, breakfast, lunch, dinner, snack FROM foodrx_meals_count fmc WHERE fmc.group_user_id = $1',
        [patientID]
    )
    if (mealCountsRow.rowCount>0){
        foodrxData.mealsCount = mealCountsRow.rows;
    }
    
    var calorieDailyPctRow = await pool.query(
        'SELECT session_id, morning_cals, lunchtime_cals, afternoon_cals, dinnertime_cals, evening_cals FROM foodrx_summary fs WHERE fs.group_user_id =$1',
        [patientID]
    )
    if (calorieDailyPctRow.rowCount>0){
        foodrxData.caloriePct  = calorieDailyPctRow.rows;
    }

    var averagePlateBreakfast = await pool.query(
        'SELECT session_id, protein,fruit,grains,vegetable FROM foodrx_average_plate_data fapd WHERE fapd.group_user_id =$1 AND fapd.meal_type = $2',
        [patientID,"breakfast"]
    )
    if (averagePlateBreakfast.rowCount>0){
        foodrxData.avgPlateBreakfast  = averagePlateBreakfast.rows;
    }

    var averagePlateLunch = await pool.query(
        'SELECT session_id, protein,fruit,grains,vegetable FROM foodrx_average_plate_data fapd WHERE fapd.group_user_id =$1 AND fapd.meal_type = $2',
        [patientID,"lunch"]
    )
    if (averagePlateLunch.rowCount>0){
        foodrxData.avgPlateLunch  = averagePlateLunch.rows;
    }

    var averagePlateDinner = await pool.query(
        'SELECT session_id,protein,fruit,grains,vegetable FROM foodrx_average_plate_data fapd WHERE fapd.group_user_id =$1 AND fapd.meal_type = $2',
        [patientID,"dinner"]
    )
    if (averagePlateDinner.rowCount>0){
        foodrxData.avgPlateDinner  = averagePlateDinner.rows;
    }

    var calorieTotalRow = await pool.query(
        'SELECT session_id,morning_cals_sum, lunchtime_cals_sum, afternoon_cals_sum, dinnertime_cals_sum, evening_cals_sum FROM foodrx_summary fs WHERE fs.group_user_id = $1',
        [patientID]
    )
    if (calorieTotalRow.rowCount > 0){
        foodrxData.calorieDailySum = calorieTotalRow.rows;
        var avgCalList = [];
        var calItem;
        for (let i=0;i<calorieTotalRow.rowCount;i++){

            const calorieTotal = calorieTotalRow.rows[i]
            const calorieAvgList = Object.values(calorieTotal).map(i => (Number(i)))
            calorieAvgList.shift()
            const avgCalorie = calorieAvgList.reduce((pv,cv) => pv+cv,0);
            calItem = {'session_id':calorieTotal.session_id,'avgCalorie':avgCalorie};
            avgCalList.push(calItem)
        }
        foodrxData.avgcal = avgCalList;
    }
    
    var grainFreqRow = await pool.query(
        'SELECT session_id, whole_grain_freq, refine_grain_freq FROM foodrx_macro_freq_resp fmfr WHERE fmfr.group_user_id = $1',
        [patientID]
    )
    if (grainFreqRow.rowCount > 0){
        foodrxData.grainFreq = grainFreqRow.rows;
    }

    var carboPctRow = await pool.query(
        'SELECT session_id,morning_carbs, lunchtime_carbs, afternoon_carbs, dinnertime_carbs, evening_carbs FROM foodrx_summary fs WHERE fs.group_user_id =$1',
        [patientID]
    )
    if (carboPctRow.rowCount>0){
        foodrxData.carboPct = carboPctRow.rows;
    }

    var proteinPctRow = await pool.query(
        'SELECT session_id, red_meat_protein_freq,poultry_protein_freq,seafood_protein_freq,plant_protein_freq,diary_egg_protein_freq FROM foodrx_macro_freq_resp fmfr WHERE fmfr.group_user_id = $1',
        [patientID]
    )
    if (proteinPctRow.rowCount>0){
        foodrxData.proteinPct = proteinPctRow.rows;
    }

    var carboTotalRow = await pool.query(
        'SELECT session_id,morning_carbs_sum, lunchtime_carbs_sum, afternoon_carbs_sum, dinnertime_carbs_sum, evening_carbs_sum FROM foodrx_summary fs WHERE fs.group_user_id = $1',
        [patientID]
    )
    if (carboTotalRow.rowCount > 0){
        foodrxData.carbDailySum = carboTotalRow.rows;
        var avgCarboList = [];
        var carbItem;
        console.log(carboTotalRow.rowCount)
        for (let i=0;i<carboTotalRow.rowCount;i++){
            const carboAvgList = Object.values(carboTotalRow.rows[0]).map(i => (Number(i)))
            carboAvgList.shift()
            const avgCarbo = carboAvgList.reduce((pv,cv) => pv+cv,0);
            carbItem = {'session_id':carboTotalRow.rows[i].session_id,'avgCarbo':avgCarbo}
            avgCarboList.push(carbItem)
        }
        foodrxData.avgCarbo = avgCarboList;
    }

    var fatFreqRow = await pool.query(
        'SELECT session_id,healthy_fat_freq, unhealthy_fat_freq FROM foodrx_macro_freq_resp fmfr WHERE fmfr.group_user_id = $1',
        [patientID]
    )
    if (fatFreqRow.rowCount > 0){
        foodrxData.fatFreq = fatFreqRow.rows;
    }

    var fatTargetPctRow = await pool.query(
        'SELECT session_id,fat_ratio_pct_of_target FROM foodrx_starplot fs WHERE fs.group_user_id = $1',
        [patientID]
    )
    if (fatTargetPctRow.rowCount > 0){
        foodrxData.fatTargetPct = fatTargetPctRow.rows;
    }

    var micronutrientsInfoRow = await pool.query(
        'SELECT session_id,nutrient,unit,avg_daily_intake,min_daily_intake,max_daily_intake,per_thousand_kcal,target_value_high FROM foodrx_nutrients_resp fnr WHERE fnr.group_user_id = $1',
        [patientID]
    )
    if (micronutrientsInfoRow.rowCount>0){
        foodrxData.micronutrients = micronutrientsInfoRow.rows;
    }

    var proteinAvgRow = await pool.query(
        'SELECT session_id,avg_daily_intake FROM foodrx_nutrients_resp WHERE group_user_id = $1 AND nutrient = $2',
        [patientID,'protein']
    )
    if (proteinAvgRow.rowCount>0){
        foodrxData.proteinAvg = proteinAvgRow.rows;
    }

    if (foodrxData){
        res.status(200).json(foodrxData);
    }else{
        res.status(500);
    }

    
});

router.post('/surveyData', async (req,res) => {
    const surveyData = {};
    const patientIDRow = await pool.query(
        "SELECT user_id FROM users u WHERE u.first_name = $1",
        [req.body.firstName]
    )
    
    const patientID = patientIDRow.rows[0].user_id;

    const eq5dlRow = await pool.query(
        "SELECT eq_5d_vas from survey_eq5dl se WHERE se.study_id = $1",
        [patientID]
    )
    if (eq5dlRow.rowCount>0){
        surveyData.eq5dl = eq5dlRow.rows[0].eq_5d_vas;
    }

    const sf36Row = await pool.query(
        "SELECT phy_func,phrl,eprl,energy,ewb,soc_func,pain,general_health from survey_sf36 ss WHERE ss.study_id = $1",
        [patientID]
    )
    if (sf36Row.rowCount>0){
        surveyData.sf36 = sf36Row.rows[0];
    }

    const djgRow = await pool.query(
        "SELECT score from survey_djg sd WHERE sd.study_id = $1",
        [patientID]
    )
    if (djgRow.rowCount>0){
        surveyData.djg = djgRow.rows[0].score;
    }

    const uefsRow = await pool.query(
        "SELECT score from survey_uefs su WHERE su.study_id = $1",
        [patientID]
    )
    if (uefsRow.rowCount>0){
        surveyData.uefs = uefsRow.rows[0].score;
    }

    const lefsRow = await pool.query(
        "SELECT score from survey_lefs sl WHERE sl.study_id = $1",
        [patientID]
    )
    if (lefsRow.rowCount>0){
        surveyData.lefs = lefsRow.rows[0].score;
    }

    const who5Row = await pool.query(
        "SELECT score from survey_who sw WHERE sw.study_id = $1",
        [patientID]
    )
    if (who5Row.rowCount>0){
        surveyData.who5 = who5Row.rows[0].score;
    }

    const gad7Row = await pool.query(
        "SELECT score FROM survey_gad7_anxiety sga WHERE sga.study_id = $1",
        [patientID]
    )
    if (gad7Row.rowCount>0){
        surveyData.gad7 = gad7Row.rows[0].score;
    }

    const cdriscRow = await pool.query(
        "SELECT score FROM survey_cdrisc_10 sc WHERE sc.study_id = $1",
        [patientID]
    )
    if (cdriscRow.rowCount>0){
        surveyData.cdrisc = cdriscRow.rows[0].score;
    }

    if (surveyData){
        res.status(200).json(surveyData);
    }else{
        res.status(500);
    }

})

router.post("/garminData", async (req,res) =>{
    const garminData = {};
    var patientIDRow = await pool.query(
        "SELECT user_id, first_name, last_name FROM users u WHERE u.first_name = $1",
        [req.body.firstName]
    );

    const first_name = patientIDRow.rows[0].first_name;
    const last_name = patientIDRow.rows[0].last_name;
    garminData.firstName = first_name;
    garminData.lastName = last_name;

    
    const patientID = patientIDRow.rows[0].user_id;
    const healthQuery = "SELECT calendardate, activitytype, restingheartrateinbeatsperminute, maxheartrateinbeatsperminute, averageheartrateinbeatsperminute,"+
                        "steps, stepsgoal, moderateintensitydurationinseconds, vigorousintensitydurationinseconds," +
                        "floorsclimbed activetimeinseconds FROM garmin_health_summary WHERE summary_id = $1"
    
    const healthRow = await pool.query(
        healthQuery,
        [patientID]
    )
    if (healthRow.rowCount>0){
        garminData.healthSummary = healthRow.rows;
    }

    const activityRow = await pool.query(
        "SELECT activitytype, durationinseconds, distanceinmeters, averagepaceinminutesperkilometer FROM garmin_activity_summary WHERE summary_id = $1",
        [patientID]
    )
    if (activityRow.rowCount>0){
        garminData.activitySummary = activityRow.rows;
    }

    const pulseOXRow = await pool.query(
        "SELECT * FROM garmin_health_pulseox_summaries WHERE summary_id = $1",
        [patientID]
    )
    if (pulseOXRow.rowCount>0){
        garminData.pulseSummary = pulseOXRow.rows;
    }

    const calorieRow = await pool.query(
        "SELECT calendardate, activekilocalories, bmrkilocalories FROM garmin_health_summary WHERE summary_id = $1",
        [patientID]
    )
    if (calorieRow.rowCount>0){
        garminData.calorieSummary = calorieRow.rows;
    }

    const sleepRow = await pool.query(
        "SELECT calendardate, durationinseconds FROM garmin_health_sleep_summary WHERE summary_id = $1",
        [patientID]
    )
    if (sleepRow.rowCount>0){
        garminData.sleepSummary = sleepRow.rows;
    }

    const stressRow = await pool.query(
        "SELECT calendardate, durationinseconds, timeoffsetstresslevelvalues FROM garmin_health_stress_details WHERE summary_id = $1",
        [patientID]
    )
    if (stressRow.rowCount>0){
        garminData.stressSummary = stressRow.rows;
    }



    if (garminData){
        res.status(200).json(garminData);
    }else{
        res.status(500);
    }
})

module.exports = router