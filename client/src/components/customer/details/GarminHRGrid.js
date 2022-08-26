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

const GarminHRGrid = (props) => {
    const resthr = parseInt(props.data.map(row => parseInt(row.restHR)).reduce((partialSum,a) => partialSum+a,0)/props.data.length);
    const highhr = parseInt(props.data.map(row => parseInt(row.highHR)).reduce((partialSum,a) => partialSum+a,0)/props.data.length);

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <HeaderItem>Avg Resting HR </HeaderItem>
                        <DataItem>{resthr} bpm</DataItem>
                    </Grid>
                    <Grid item xs={6}>
                        <HeaderItem>Avg High HR</HeaderItem>
                        <DataItem>{highhr} bpm</DataItem>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default GarminHRGrid