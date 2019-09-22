import React from 'react';

import {
  ProductPageContainer,
  ProductName,
  ShortDescription,
  LongDescription,
  ProductCode,
  Price,
  Metric,
  QuantityContainer,
  QuantityInput,
  QuantityArrows
} from './Product.styles';

import { Grid, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ProductPage = () => (
  <ProductPageContainer maxWidth="lg">
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <img
          src="https://via.placeholder.com/500x500/aaa"
          alt=""
          width="100%"
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <ProductName>Roasted Pistachios with Sea Salt</ProductName>
        <ShortDescription>Absolute new taste experience!</ShortDescription>
        <ProductCode>PI14003</ProductCode>
        <Price>
          €8.50 <Metric>/per 150 grams</Metric>
        </Price>
        <LongDescription>
          Forget everything you know about common pistachio nuts and feel the
          unique taste of the our pistachios that are produced in Aegina!
        </LongDescription>
        <QuantityContainer>
          <QuantityArrows>
            <FontAwesomeIcon icon={faAngleLeft} />
          </QuantityArrows>
          <QuantityInput />
          <QuantityArrows>
            <FontAwesomeIcon icon={faAngleRight} />
          </QuantityArrows>
        </QuantityContainer>
        <Button variant="contained" color="primary" size="large">
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  </ProductPageContainer>
);

export default ProductPage;
