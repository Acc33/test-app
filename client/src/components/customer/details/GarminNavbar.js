import React, { useEffect } from 'react'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"
import HikingIcon from '@mui/icons-material/Hiking';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

const GarminNavbar = (props) => {
    const getCurrPeriod = (period) => {
        props.getPeriod(period)
    };
    var icon,text,curr_color;
    if (props.type == 'steps'){
        icon = <HikingIcon />;
        text = 'Step Count';
        curr_color = '#0FB4E4';
    }else if (props.type == 'intensity'){
        icon = <AccessAlarmIcon />;
        text = 'Intensity Minutes';
        curr_color = '#00A36C';
    }else if(props.type == 'activity'){
        icon = <DirectionsBikeIcon />;
        text = 'Activities Tracked';
        curr_color = '#E49B0F';
    }else{
        icon = <FavoriteIcon />
        text = 'Heart Rate';
        curr_color = '#D22B2B'
    }
    
    return (
        <div>
            <AppBar position='static' sx={{bgcolor:curr_color }}>
                <Toolbar sx={{display:'flex', justifyContent:'space-around'}}>
                    <Stack direction='row' spacing={5}>
                        <Button  
                            onClick={() => getCurrPeriod('7d')}
                            sx={{
                                ':focus':{
                                    bgcolor:'#474244',
                                },
                                color:'inherit'
                            }}
                         >7d</Button>
                        <Button  
                            onClick={() => getCurrPeriod('4w')}
                            sx={{
                                ':focus':{
                                    bgcolor:'#474244',
                                },
                                color:'inherit'
                            }}
                        >4w</Button>
                        <Button  
                            onClick={() => getCurrPeriod('1y')}
                            sx={{
                                ':focus':{
                                    bgcolor:'#474244',
                                },
                                color:'inherit'
                            }}
                        >1y</Button>
                    </Stack>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default GarminNavbar

