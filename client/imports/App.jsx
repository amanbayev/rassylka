import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import Landing from '/client/imports/Landing'
import Authenticated from '/client/imports/Authenticated'
import Login from '/client/imports/Login'
import NotFound from '/client/imports/NotFound'

const App = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Authenticated path="/" component={ Landing } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default withTracker(props => {
  const loggingIn = Meteor.loggingIn()
  const user = Meteor.user()
  const userId = Meteor.userId()
  const loading = Roles.subscription ? !Roles.subscription.ready() : true

  return {
    loggingIn,
    loading,
    user,
    userId,
    authenticated: !loggingIn && !!userId,
    roles: !loading && Roles.getRolesForUser(userId),
  }
})(App)
