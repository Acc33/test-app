import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const CircularProgressBar = (props) => {
    let value = props.value;
    if (props.value > 100){
        value = 100;
    }

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex'}}>
            <CircularProgress variant="determinate" value={value} size='4rem'/>
            <Box
                sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                {`${Math.round(value)}%`}
                </Typography>
            </Box>
        </Box>
    )
}

export default CircularProgressBar