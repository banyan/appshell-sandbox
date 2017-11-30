import * as React from 'react';
import fakeAuth from '../../lib/fake_auth';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={{
          pathname: '/'
        }}/>
      )
    }
    // <p>You must log in to view the page at {from.pathname}</p>

    return (
      <div>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login;
