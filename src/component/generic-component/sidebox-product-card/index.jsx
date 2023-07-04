import { Box, Typography } from "@mui/material";
import React from "react";
import product1Image from "../.././../assets/images/p-1.jpg";

const SideProductCard = () => {
  return (
    <Box className="side-product-card">
      <Box
        className="sidebox-img"
        sx={{ backgroundImage: `url(${product1Image})` }}
      ></Box>
      <Box className="sideCard-content-container">
        <Typography className="categories">WOMEN, CLOTHING</Typography>
        <Typography className="title mt-5">Linen-blend jumpsuit</Typography>
        <Typography className="price mt-10">₹10.00</Typography>
      </Box>
    </Box>
  );
};

export default SideProductCard;
