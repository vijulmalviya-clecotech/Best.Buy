import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import banner1Image from '../../../assets/images/banner-1.jpg';
import banner2Image from '../../../assets/images/banner-2.jpg';
import banner3Image from '../../../assets/images/banner-3.jpg';
import banner4Image from '../../../assets/images/banner-4.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  return (
    <Box className="categoriesPage mt-50 mb-50">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box className="categoryContainer box-img" sx={{ backgroundImage: `url(${banner1Image})` }}>
          <Box className="hoverContent">
              <Typography className='category-heading'>Jackets and Sweat Shirts</Typography>
              <Typography component={Link} to="/" className='category-subheading mt-10 hvr-bounce-to-right'>Shop Now <ArrowRightAltIcon sx={{color:"#fff", ml:1}} /></Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box className="categoryContainer box-img" sx={{ backgroundImage: `url(${banner2Image})` }}>
            <Box className="hoverContent">
              <Typography className='category-heading'>Men's Collecton</Typography>
              <Typography component={Link} to="/" className='category-subheading mt-10 hvr-bounce-to-right'>Shop Now <ArrowRightAltIcon sx={{color:"#fff", ml:1}} /></Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Box className="innerCategoryContainer box-img" sx={{ backgroundImage: `url(${banner3Image})` }}>
              <Box className="hoverContent">
              <Typography className='category-heading'>Women's Collection</Typography>
              <Typography component={Link} to="/" className='category-subheading mt-10 hvr-bounce-to-right'>Shop Now <ArrowRightAltIcon sx={{color:"#fff", ml:1}} /></Typography>
            </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="innerCategoryContainer box-img" sx={{ backgroundImage: `url(${banner4Image})` }}>
              <Box className=" hoverContent">
              <Typography className='category-heading'>Accessories</Typography>
              <Typography component={Link} to="/" className='category-subheading mt-10 hvr-bounce-to-right'>Shop Now <ArrowRightAltIcon sx={{color:"#fff", ml:1}} /></Typography>
            </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoriesPage;
