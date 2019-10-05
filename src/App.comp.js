import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentAuthenticatedUserStart } from './redux/authentication/authentication.actions';

import PublicLayout from './layouts/PublicLayout/PublicLayout.comp';
import AdminLayout from './layouts/AdminLayout/AdminLayout.comp';

const App = ({ getCurrentAuthenticatedUserStart }) => {
  useEffect(() => {
    getCurrentAuthenticatedUserStart();
  }, [getCurrentAuthenticatedUserStart]);
  return (
    <Switch>
      <Route path="/admin" component={AdminLayout} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};

const mapDispatchToProps = dispatch => ({
  getCurrentAuthenticatedUserStart: () =>
    dispatch(getCurrentAuthenticatedUserStart())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
