import React from 'react';

import {
  ShopPageContainer,
  TopBannerContainer,
  CategoryContainer,
  CategoryTitle
} from './Shop.styles';
import { Title, Subtitle } from '../../App.styles';

import { Grid, Paper } from '@material-ui/core';

const ShopPage = () => (
  <ShopPageContainer maxWidth="xl">
    <TopBannerContainer>
      <Title margin="1em 0 0 0" light>
        Greek Pistachio Nuts
      </Title>
      <Subtitle light>The Premium Selection</Subtitle>
    </TopBannerContainer>
    <CategoryContainer>
      <CategoryTitle>Pistachios</CategoryTitle>
      <Grid container spacing={3}>
        {[0, 1, 2, 4, 5, 6].map(value => (
          <Grid key={value} item>
            <Paper elevation={0}>
              <div>
                <img src="https://via.placeholder.com/400x400/aaa" alt="" />
              </div>
              <Grid container justify="space-between">
                <div>product {value}</div>
                <div>&euro; 10</div>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </CategoryContainer>
    <CategoryContainer>
      <CategoryTitle>Pistachio Products</CategoryTitle>
      <Grid container spacing={2}>
        {[0, 1, 2].map(value => (
          <Grid key={value} item>
            <Paper elevation={0}>
              <div>
                <img src="https://via.placeholder.com/400x400/aaa" alt="" />
              </div>
              product 1
            </Paper>
          </Grid>
        ))}
      </Grid>
    </CategoryContainer>
    <CategoryContainer>
      <CategoryTitle>Pistachio Accessories</CategoryTitle>
      <Grid container spacing={2}>
        {[0, 1].map(value => (
          <Grid key={value} item>
            <Paper elevation={0}>
              <div>
                <img src="https://via.placeholder.com/400x400/aaa" alt="" />
              </div>
              product 1
            </Paper>
          </Grid>
        ))}
      </Grid>
    </CategoryContainer>
  </ShopPageContainer>
);

export default ShopPage;
