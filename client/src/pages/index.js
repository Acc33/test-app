import { Box, Container, Grid } from '@mui/material';
import Showcase from 'src/components/landing/Showcase';
import React, {UseState, UseEffect} from 'react';

const Dashboard = () => (
  <>
    <Box
    >
      <Container maxWidth={false}>
        <Showcase />
      </Container>
    </Box>
  </>
);


export default Dashboard;

