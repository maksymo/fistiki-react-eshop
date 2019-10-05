import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/authentication/authentication.selectors';

import { PublicLayoutContainer, PublicLayoutBody } from './PublicLayout.styles';

import Header from '../../components/common/Header/Header.comp';
import Footer from '../../components/common/Footer/Footer.comp';
import Home from '../../pages/Home/Home.comp';
import Shop from '../../pages/Shop/Shop.comp';
import Product from '../../pages/Product/Product.comp';
import Authentication from '../../pages/Authentication/Authentication.comp';

const PublicLayout = ({ currentUser }) => (
  <PublicLayoutContainer>
    <Header />
    <PublicLayoutBody>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:productId" component={Product} />
        <Route
          exact
          path="/sign-in"
          render={() =>
            currentUser && currentUser['cognito:username'] ? (
              <Redirect to="/" />
            ) : (
              <Authentication />
            )
          }
        />
      </Switch>
    </PublicLayoutBody>
    <Footer />
  </PublicLayoutContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(PublicLayout);
