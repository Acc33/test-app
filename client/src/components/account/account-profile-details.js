import { useEffect, useState } from 'react';
// import needed modules
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { useRouter } from 'next/router';


export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    membership_date: '',
    cohort: '',
  });

  useEffect(() => {
    const userEmail = sessionStorage.getItem('user')
    console.log(userEmail)
    async function getData(){
      const data = await fetch("http://localhost:4000/auth/getUserInfo", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({email:userEmail}),
      })
      .catch(err =>{
        console.log(err)
      })
      .then(res => {
        if(res.ok){
          return res.json()
        }else{
          console.log("Failed to get data");
          return;
        }
      })
      .then(data =>{
        setValues({
          firstName:data.profile.first_name,
          lastName:data.profile.last_name,
          email:data.profile.email_addr,
          membership_date:data.profile.created_date.slice(0,10),
          cohort:data.cohort
        });
        return data;
      })
    }
    getData();
  },[])

  const router = useRouter();
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const logout = () => {
    router.push('/');
    sessionStorage.removeItem('user');
  }

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Membership Date"
                name="membership_date"
                onChange={handleChange}
                required
                value={values.membership_date}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Cohort Name"
                name="cohort"
                onChange={handleChange}
                required
                value={values.cohort}
                variant="outlined"
              />
            </Grid>
            
          </Grid>
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
            onClick = {logout}
          >
            Log Out
          </Button>
        </Box>
      </Card>
    </form>
  );
};
