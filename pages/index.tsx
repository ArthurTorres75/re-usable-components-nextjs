import React from "react";
import type { NextPage } from "next";
import { Box, Grid, Paper, styled } from "@mui/material";
import Navbar from './components/layout/Navbar';
import { CustomGrid } from "./components/Grid/CustomGrid";
import { ComponentList } from '../utils/constants';

const Home: NextPage = () => {
  return (
    <Box sx={{ height: "100vh", flexGrow: 1, padding: 2 }}>
      <Navbar/>
      <Grid container spacing={1}>
        <CustomGrid spacing={2} columsWidth={4} data={ComponentList} />
      </Grid>
    </Box>
  );
};

export default Home;
