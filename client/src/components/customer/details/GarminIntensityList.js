import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CircularProgressBar from '../charts/CircularProgressBar';

const GarminIntensityList = (props) => {
    let i = 0;
    const goal = props.goal;
    const listData = [];
    while (i+7<=props.data.length){
        const newDate = props.data[i].date+' to '+props.data[i+6].date;
        const newIntense = parseInt(props.data.slice(i,i+7).map(row => parseInt(row.intenseDuration)/60).reduce((partialSum, a) => partialSum + a, 0));
        const listRow = {date:newDate,intense:newIntense,goal:goal*7,goalPct:parseInt((newIntense/(goal*7)*100))};
        listData.push(listRow)
        i = i+7;
    }

    return (
        <div>
            <List 
                sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}>
                {listData.map(row => (
                    <div key={row.date} style={{display:'flex',justifyContent:'space-around'}}>
                        <div>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <EmojiEventsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={row.date} secondary={`${row.goalPct}% of Goal`}/>
                            </ListItem>
                        </div>
                        
                        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                            <h4 style={{marginRight:'2rem'}}>{row.intense} min</h4>
                            <CircularProgressBar value={row.goalPct}/>
                        </div>
                    </div>
                ))}
            </List>
        </div>
    );
    
}

export default GarminIntensityList