import React from 'react'
import router from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HikingIcon from '@mui/icons-material/Hiking';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

const directToGarminDetail = (type,data,name) => {
    const pathname = "/customers/"+name+"/garmin/"+type;
    var query;
    if (type == "steps"){
        const date = data['steps'].map(row => row['calendardate']);
        const steps = data['steps'].map(row => row['steps']);
        const length = data['distance'].map(row => row['distanceinmeters']);
        query = {date,steps,length};
    }else if (type == "intensity"){
        const date = data['intensity'].map(row => row['calendardate']);
        const intenseDuration = data['intensity'].map(row => row['vigorousintensitydurationinseconds']);
        const moderateDuration = data['intensity'].map(row => row['moderateintensitydurationinseconds']);
        query = {date,intenseDuration,moderateDuration};
    }else if(type == "activity"){
        const activityType = data['activity'].map(row => row['activitytype']);
        const duration = data['activity'].map(row => row['durationinseconds']);
        const distance = data['activity'].map(row => row['distanceinmeters']);
        const date = data['date'].map(row => row['calendardate']);
        query = {activityType,duration,distance,date};
    }else{
        const date = data['heartrate'].map(row => row['calendardate']);
        const avgRestHr = data['heartrate'].map(row => row['restingheartrateinbeatsperminute']);
        const avgHighHr = data['heartrate'].map(row => row['maxheartrateinbeatsperminute']);
        query = {date,avgRestHr,avgHighHr};
    }
    router.push({
        pathname:pathname,
        query:query
    },pathname)
    
  };
const GarminCard = (props) => {

    const firstText = props.firstText;
    const secondText = props.secondText;
    const desc = props.desc;
    const type = props.type
    const data = props.data;
    const name = props.name;

    var icon;
    if (type == "steps"){
        icon = <HikingIcon />
    }else if(type == "intensity"){
        icon = <AccessAlarmIcon />
    }else if(type == "activity"){
        icon = <DirectionsBikeIcon />
    }else {
        icon = <FavoriteIcon />
    }

    
    return (
        <div>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center" gutterBottom>
                    <Grid item style={{marginRight:"2rem"}}>
                        {icon}
                    </Grid>
                    <Grid item xs>
                        <Typography gutterBottom variant="h3" component="div">
                            {type}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => directToGarminDetail(type,data,name)}>Details</Button>
                    </Grid>
                </Grid>
                <Typography color="text.secondary" variant="h6" gutterBottom>
                    {desc}
                </Typography>
                <Typography color="text.primary" variant="body1">
                    {firstText}
                </Typography>
                <Typography color="text.primary" variant="body1">
                    {secondText}
                </Typography>
            </Box>    
        </div>
    )
}

export default GarminCard