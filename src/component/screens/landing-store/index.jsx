import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Productcard from "../../generic-component/product-card";
import SideProductCard from "../../generic-component/sidebox-product-card";

const LandingStore = () => {
  return (
    <Box className="mt-50 mb-50">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <Grid item xs={12}>
            <Typography className="LandingStoreHeading mt-30">
              Recent Arrivals
            </Typography>
          </Grid>
          <Box className="landingProducts mt-30 mb-30">
            <Grid container spacing={1}>
              <Grid item xs={6} sm={4}>
                <Productcard />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Productcard />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Productcard />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Productcard />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Productcard />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Productcard />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography className="LandingStoreHeading mt-30">
            Best Selling
          </Typography>
          <Box className="landingProducts mt-30 mb-30">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <SideProductCard />
              </Grid>
              <Grid item xs={12}>
                <SideProductCard />
              </Grid>
              <Grid item xs={12}>
                <SideProductCard />
              </Grid>
              <Grid item xs={12}>
                <SideProductCard />
              </Grid>
            </Grid>
          </Box>
          <Typography className="LandingStoreHeading mt-30">
            
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingStore;
