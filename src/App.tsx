import * as React from 'react';
import { BrowserRouter, Route, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import fakeAuth from './lib/fake_auth';

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const App = () => (
  <BrowserRouter>
    <div>
      <AuthButton />
      <Route path="/login" component={Login} />
      <PrivateRoute exact={true} path="/" component={Dashboard} />
      <PrivateRoute path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default App;
