import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import GarminCard from './GarminCard';
import { garminData } from '../PageTable';
import GarminSummary from './GarminSummary';
import GarminOverallSummary from './GarminOverallSummary';


export const Garmin = (props) => {
  const avgSteps = props.overall_info.avgSteps;
  const avgStepsCategory = props.overall_info.stepsCategory;
  const avgIntenseMins = props.overall_info.avgIntenseMins;
  const avgIntenseMinsCategory = props.overall_info.avgIntenseMinsCategory;
  const avgActivityTime = props.overall_info.avgActivityTime;
  const avgCalorie = props.overall_info.avgCalorie;
  const avgRestHR = props.overall_info.avgRestHR;
  const avgHighHR = props.overall_info.avgHighHR;
  return (
    <div>
      <GarminOverallSummary avgSteps={avgSteps} avgStepsCategory={avgStepsCategory}
          avgTime={avgIntenseMins} avgTimeCategory={avgIntenseMinsCategory} avgDuration={avgActivityTime}
          avgEnergy={avgCalorie} avgRestHR={avgRestHR} avgHighHR={avgHighHR} name={props.name}/>
      <GarminSummary data={props.data}/>
    </div>
  )
}
