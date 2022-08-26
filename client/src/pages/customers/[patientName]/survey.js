import React from 'react'
import Detail_navbar from 'src/components/customer/detail-navbar';
import Survey from 'src/components/customer/details/Survey';

const survey = () => {

  // console.log(surveyData)
  // const survey_sf36 = [surveyData.sf36.phy_func,surveyData.sf36.phrl,surveyData.sf36.eprl,surveyData.sf36.energy,surveyData.sf36.ewb,surveyData.sf36.soc_func
  //   ,surveyData.sf36.pain,surveyData.sf36.general_health]

  // const sf36RadarSeries = [{
  //     name:'Summary category',
  //     data: survey_sf36,
  // }];

  // const sf36RadarOptions = {
  //     chart:{
  //         height:200,
  //         width: 400,
  //         type: 'radar'
  //     },
  //     title: {
  //         text: 'SF36'
  //     },
      
  //     labels: ['Phy_Func','RLPP','RLEP','Energy','EWB','Soc_Func','Pain','General_Health'] 
  // };
  return (
    <div>
        {/* <Detail_navbar patient_name={patient_name} />
        <Survey cdrisc={surveyData.cdrisc} djg={surveyData.djg} who5={surveyData.who5} eq5dl={surveyData.eq5dl} lefs={surveyData.lefs} uefs={surveyData.uefs} series={sf36RadarSeries}
          options={sf36RadarOptions} gad7={surveyData.gad7} /> */}
          Survey
    </div>
  )
}

export default survey