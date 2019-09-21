import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppContainer, AppBody } from './App.styles';

import Header from './components/common/Header/Header.comp';
import Footer from './components/common/Footer/Footer.comp';
import HomePage from './pages/Home/Home.comp';
import ShopPage from './pages/Shop/Shop.comp';
import ProductPage from './pages/Product/Product.comp';
import AuthenticationPage from './pages/Authentication/Authentication.comp';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <AppBody>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/products/:productId" component={ProductPage} />
          <Route exact path="/sign-in" component={AuthenticationPage} />
        </Switch>
      </AppBody>
      <Footer />
    </AppContainer>
  );
};

export default App;
