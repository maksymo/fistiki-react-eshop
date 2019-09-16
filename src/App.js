import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppContainer } from './App.styles';

import Header from './components/common/header/header.comp';
import Footer from './components/common/footer/footer.comp';
import HomePage from './pages/home/home.comp';
import ProductPage from './pages/product/product.comp';
import AuthenticationPage from './pages/authentication/authentication.comp';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:productId" component={ProductPage} />
        <Route exact path="/sign-in" component={AuthenticationPage} />
      </Switch>
      <Footer />
    </AppContainer>
  );
};

export default App;
