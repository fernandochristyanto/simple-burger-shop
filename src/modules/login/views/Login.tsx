import React, { Component } from 'react'
import { connect } from 'react-redux';

import classes from './Login.module.css';
import { Card, CardTitle } from '../../../components/card'
import LoginButton from '../components/loginButton/LoginButton';
import NewInput from '../../../components/newInput/NewInput';
import { doLogin } from '../redux/actions';
import { IDoLoginParam, ILoginProps } from '../interfaces';
import { Redirect } from 'react-router-dom';

class Login extends Component<ILoginProps> {
  state = {
    username: '',
    password: '',
    validationMessage: {
      username: '',
      password: '',
    }
  }

  loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!this.validateInput()) return;

    alert(`Login attemp\nUsername: ${this.state.username}\nPassword: *********`);

    const param = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.onLogin(param);
  }

  validateInput = (): boolean => {
    let flag = true;
    let validationMessage = { username: '', password: '' }

    if (!this.state.username) {
      flag = false;
      validationMessage = { ...validationMessage, username: 'Enter your username' }
    }
    if (!this.state.password) {
      flag = false;
      validationMessage = { ...validationMessage, password: 'Enter your password' }
    }

    this.setState({ validationMessage })
    return flag;
  }

  render() {
    return (
      this.props.auth.res ? <Redirect to="/" /> :
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
                  errorMessage={this.state.validationMessage.username}
                />
                <NewInput
                  label="Password"
                  type="password"
                  icon="lock"
                  isEmpty={this.state.password.length <= 0}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  errorMessage={this.state.validationMessage.password}
                />
                <LoginButton onClick={(e) => this.loginHandler(e)} disabled={this.props.auth.fetch} />
              </form>
            </Card>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (param: IDoLoginParam) => dispatch(doLogin(param)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
