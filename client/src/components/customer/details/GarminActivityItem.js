import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const GarminActivityItem = (props) => {

    const activityType = props.type;
    const date = props.date;
    const duration = parseInt(parseInt(props.duration)/60);
    const distance = parseInt(props.distance);

    const directToActivityDetail = (data,username) => {
        const pathname = "/customers/"+username+"/garmin/activity/details";
        
        router.push({
            pathname:pathname,
            query:data
        },pathname)
        
    };

    if (props.period == '7d'){
        summaryText = 'Activity Summary in the last 7 days'
    }else if(props.period == '4w'){
        summaryText = 'Activity Summary in the last 4 weeks'
    }else{
        'Activity Summary in the last 12 months'
    }
    
    return (
        <div>
            <Box sx={{ my: 1, mx: 2 }}>
                <Grid container alignItems="center" gutterBottom>
                    <Grid item xs>
                        <Typography gutterBottom variant="h3" component="div">
                             {activityType}
                        </Typography>
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <Typography color="text.secondary" variant="h6" gutterBottom>
                        Date: {date}
                    </Typography>
                    <Typography color="text.primary" variant="body1">
                        Duration: {duration} mins
                    </Typography>
                    <Typography color="text.primary" variant="body1">
                        Distance: {distance} meters
                    </Typography>
                </div>
            </Box>    
        </div>
    )
}

export default GarminActivityItem