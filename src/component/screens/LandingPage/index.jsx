import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CategoriesPage from "../CategoriesPage";

const LandingPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className="landingPage">
          <Container>
            <Box className="homebgContent">
              <Typography
                component={Link}
                to="/"
                className="subContent hvr-bounce-to-right"
              >
                Seasonal Pick
              </Typography>
              <Box className="mainContent">
                <Typography className="heading">A New Era..</Typography>
              </Box>
              <Typography
                component={Link}
                to="/"
                className="subContent-btn hvr-bounce-to-right"
              >
                Discover More
              </Typography>
            </Box>
          </Container>
        </Box>
        <Container>
        <CategoriesPage />
        </Container>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
