import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/authentication/authentication.selectors';
import { getCurrentAuthenticatedUserStart } from './redux/authentication/authentication.actions';

import { AppContainer, AppBody } from './App.styles';

import Header from './components/common/Header/Header.comp';
import Footer from './components/common/Footer/Footer.comp';
import HomePage from './pages/Home/Home.comp';
import ShopPage from './pages/Shop/Shop.comp';
import ProductPage from './pages/Product/Product.comp';
import AuthenticationPage from './pages/Authentication/Authentication.comp';

const App = ({ getCurrentAuthenticatedUserStart, currentUser }) => {
  useEffect(() => {
    getCurrentAuthenticatedUserStart();
  }, [getCurrentAuthenticatedUserStart]);
  return (
    <AppContainer>
      <Header />
      <AppBody>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:productId" component={ProductPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              currentUser &&
              currentUser.attributes &&
              currentUser.signInUserSession ? (
                <Redirect to="/" />
              ) : (
                <AuthenticationPage />
              )
            }
          />
        </Switch>
      </AppBody>
      <Footer />
    </AppContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  getCurrentAuthenticatedUserStart: () =>
    dispatch(getCurrentAuthenticatedUserStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
