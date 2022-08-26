import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { userData } from 'src/pages/login';
import { useRouter } from 'next/router';

export const SettingsPassword = (props) => {

  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  
  const updatePassword = (new_password) => {

    const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body : JSON.stringify({email:userData.profile.rows[0].email_addr,newPass:new_password})
    };
    return fetch("http://localhost:4000/reset/password",requestOptions)
    .then(res => {
      console.log(res);
      if (res.ok){
        alert("Password Updated!");
      }else{
        alert("New password must be different from the old password!");
      }
    })
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => updatePassword(values.confirm)}
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
