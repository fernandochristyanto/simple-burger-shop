import React, { Component } from 'react'

import classes from './Login.module.css';
import { Card, CardTitle } from '../../../components/card'
import LoginButton from '../components/loginButton/LoginButton';
import NewInput from '../../../components/newInput/NewInput';

class Login extends Component<any> {
  state = {
    username: '',
    password: '',
  }

  loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(`Login attemp\nUsername: ${this.state.username}\nPassword: *********`);
  }

  render() {
    return (
      <div className={classes.Login}>
        <div className={classes.LoginForm}>
          <Card>
            <CardTitle>Simple Burger Shop</CardTitle>
            <form>
              <NewInput
                label="Username"
                type="text"
                icon="account_circle"
                isEmpty={this.state.username.length <= 0}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <NewInput
                label="Password"
                type="password"
                icon="lock"
                isEmpty={this.state.password.length <= 0}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <LoginButton onClick={(e) => this.loginHandler(e)} />
            </form>
          </Card>
        </div>
      </div>
    )
  }
}

export default Login
