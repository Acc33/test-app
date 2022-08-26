import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';


const GarminHRList = (props) => {
    const listData = props.data;
    const weekdays = {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
    }
   
    return (
        <div>
            <div>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {listData.map(row => (
                        <div key={row.date} style={{display:'flex',justifyContent:'space-around'}}>
                            <div>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FavoriteIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={row.date} secondary={weekdays[new Date(row.date).getDay()]}/>
                                </ListItem>
                            </div>
                            
                            <div style={{display:'flex', alignItems:'center'}}>
                                <p style={{marginRight:'1rem'}}><b>Rest:</b>{row.restHR}</p>
                                <p style={{marginRight:'1rem'}}><b>High:</b>{row.highHR}</p>
                            </div>
                        </div>
                    ))}
                </List>
            </div>
        </div>
    )
}

export default GarminHRList