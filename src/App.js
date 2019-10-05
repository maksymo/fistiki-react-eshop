import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/authentication/authentication.selectors';
import { getCurrentAuthenticatedUserStart } from './redux/authentication/authentication.actions';

import { AppContainer, AppBody } from './App.styles';

import Header from './components/common/Header/Header.comp';
import Footer from './components/common/Footer/Footer.comp';
import Home from './pages/Home/Home.comp';
import Shop from './pages/Shop/Shop.comp';
import Product from './pages/Product/Product.comp';
import Authentication from './pages/Authentication/Authentication.comp';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.comp';

const App = ({ getCurrentAuthenticatedUserStart, currentUser }) => {
  useEffect(() => {
    getCurrentAuthenticatedUserStart();
  }, [getCurrentAuthenticatedUserStart]);
  return (
    <AppContainer>
      <Header />
      <AppBody>
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
          <Route path="/admin/dashboard" component={AdminDashboard} />
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
