import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/authentication/authentication.selectors';

import { AdminLayoutContainer, AdminLayoutBody } from './AdminLayout.styles';

import Header from '../../components/common/Header/Header.comp';
import AdminDashboard from '../../pages/AdminDashboard/AdminDashboard.comp';

const PublicLayout = ({ currentUser }) => (
  <AdminLayoutContainer>
    <Header />
    <AdminLayoutBody>
      <Switch>
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
    </AdminLayoutBody>
  </AdminLayoutContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(PublicLayout);
