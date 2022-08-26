import React from 'react'
import {Grid, Typography,Paper,Box} from '@mui/material'
import { styled } from '@mui/material/styles';

const HeaderItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight:'bold'
  }));
  const DataItem = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      fontWeight:'normal'
    }));

const GarminStepsGrid = (props) => {
    const totalSteps = props.data.map(row => parseInt(row.stepsCount)).reduce((partialSum, a) => partialSum + a, 0);
    const totalDistance = parseInt((props.data.map(row => parseInt(row.distance)).reduce((partialSum, a) => partialSum + a, 0)/1000));
    const avgSteps = parseInt((totalSteps/props.data.length));
    
    if (props.data.isNot7d == true){
        const stepsWeekly = []
        for (let i=0;i<props.data.length;i+=7){
            if ((i+7) > props.data.length){
                break
            }
            stepsWeekly.push(props.data.slice(i,i+7).map(row => parseInt(row.stepsCount)).reduce((partialSum,a) => partialSum+a,0));
        }
        const avgWeeklySteps = parseInt(stepsWeekly.reduce((partialSum,a) => partialSum+a,0)/stepsWeekly.length);
    }
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <HeaderItem>Total Steps</HeaderItem>
                        <DataItem>{totalSteps} Steps</DataItem>
                    </Grid>
                    <Grid item xs={6}>
                        <HeaderItem>Total Distance</HeaderItem>
                        <DataItem>{totalDistance} KM</DataItem>
                    </Grid>
                    <Grid item xs={6}>
                        <HeaderItem>Avg Daily Steps</HeaderItem>
                        <DataItem>{avgSteps} Steps</DataItem>
                    </Grid>
                    {props.data.isNot7d &&
                        <Grid item xs={6}>
                            <HeaderItem>Avg Weekly</HeaderItem>
                            <DataItem>{avgWeeklySteps} Steps</DataItem>
                        </Grid>
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default GarminStepsGrid