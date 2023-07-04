import { Box, Typography } from "@mui/material";
import React from "react";
import product1Image from "../.././../assets/images/p-1.jpg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Productcard = () => {
  return (
    <Box className="card">
      <Box className="card-img-container" sx={{backgroundImage:`url(${product1Image})`}}>
        <Box className="card-hover">
            <Box className="like_btn">
              <FavoriteBorderIcon sx={{color:"#fff"}} />
            </Box>
            <Typography className="viewProducts_btn">View Product</Typography>  

        </Box>
      </Box>
      <Box className="card-content-container">
        <Typography className="categories">WOMEN, CLOTHING</Typography>
        <Typography className="title mt-5">LInen-blend jumpsuit</Typography>
        <Typography className="price mt-10">$10.00</Typography>
      </Box>
    </Box>
  );
};

export default Productcard;
