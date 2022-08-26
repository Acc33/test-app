import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';
import PatientsTable from 'src/components/customer/PatientsTable';


const Customers = () => {
  const router = useRouter();
  const [patients,setPatients] = useState()


  useEffect(() => {
    const userEmail = sessionStorage.getItem('user');
    async function getData(){
      const data = await fetch ("http://localhost:4000/getPatients/getPatients", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({email:userEmail}),
      })
      .catch(err => {
        alert("Network Error!")
        return;
      })
      .then(res => {
        if (res.ok){
          return res.json()
        }
        if (!res || !res.ok || res.status >= 400) {
          alert("Wrong email or password, please try again!");
          return;
        }
      })
      .then(data => {
        return data;
      })
      setPatients(data);
      return data;
    }
    getData();
  },[])


  return (
    <>
      <Head>
        <title>
          Customers | Material
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          {/* <CustomerListToolbar /> */}
          <Box sx={{ mt: 3 }}>

            <PatientsTable patients={patients}/>
          </Box>
        </Container>
      </Box>
    </>
  )
};
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
