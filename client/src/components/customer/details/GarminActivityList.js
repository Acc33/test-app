import React from 'react'
import Box from '@mui/material/Box';
import GarminActivityItem from './GarminActivityItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Divider } from '@mui/material';


const GarminActivityList = (props) => {

    const activity_cols = [
        {name:'Date', selector:row=>row.date, sortable:true, right:true},
        {name:'Activity Type', selector:row=>row.activitytype, sortable:true, right:true},
        {name:'Duration (Mins)', selector:row=>row.duration, sortable:true, right:true},
        {name:'Distance (Ms)', selector:row=>row.distance, sortable:true, right:true},
    ]

    const data = props.data;
    const rows = [];
    for (let i=0;i<data.length;i++){
        rows.push(
            <div>
                <GarminActivityItem type={data[i].activityType} date={data[i].date} 
                duration={data[i].duration} distance={data[i].distance} />
                <Divider />
            </div>
        )
    }

    return (
        <div>
            <List
                sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 600,
                    '& ul': { padding: 0 },
                }}
            >
                {rows}
            </List>
        </div>
    )
}

export default GarminActivityList