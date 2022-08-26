import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Menu } from '@mui/material';

export default function DateFilter(props) {
    const [date, setDate] = React.useState(props.datePeriods[0].date_since.slice(0,10)+' to '+ props.datePeriods[0].date_until.slice(0,10));
    console.log(props.datePeriods)
    const handleChange = (event) => {
        const newDate = event.target.value;
        setDate(event.target.value);
        props.getDate(newDate)
    };
    var datePeriods = props.datePeriods.map(datePeriod => {

        const period = datePeriod.date_since.slice(0,10) + " to " + datePeriod.date_until.slice(0,10)
        return <MenuItem key={period} value={period}>{period} (session {datePeriod.session_id})</MenuItem>
    });
    
    return (
        <Box sx={{ width:500 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Time Periods</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={date}
            label="Select Time Periods"
            onChange={handleChange}
            >
            {datePeriods}
            </Select>
        </FormControl>
        </Box>
    );
}