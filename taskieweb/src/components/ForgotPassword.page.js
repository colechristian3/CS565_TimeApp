import React from 'react';
import '../styles/main.css';
import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';
import Form from "./Form.molecule"
import Logo from "./Logo.atom";
import { CONST } from "../constants"
import TextInput from "./TextInput.atom";
import Button from "./Button.atom";
import Footer from "./Footer.molecule";


class ForgotPasswordPage extends ForgotPassword {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.styles = {
      loginCard: { background: 'white', gridColumn: '2', gridRow: '3' },
      gridContainer: { gridTemplateColumns: 'auto 300px auto', gridTemplateRows: 'auto auto 415px auto auto 20px' },
      logo: {paddingRight: '15px', paddingLeft: '15px'},
      forgotPassword: { fontSize: '13px'},
      buttonGridContainer: { gridTemplateColumns: 'auto auto auto', gridTemplateRows: 'auto auto'},
      createAccount: { fontSize: '17px',  marginTop: '30px'}
    }
  }

  onChange(key, event){
    switch(key) {
      case 'username':
        this.setState({ username: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;
    }
  }

  render() {
    return (
      <div className="gradient-background full-window grid-container" style={this.styles.gridContainer} >
        <Form className="white-background" style={this.styles.loginCard}>
          <h1>Forgot Password</h1>
          <Logo src={ CONST.logoFullUrl }
                alt="Taskie Logo"
                style={this.styles.logo}
          />
          <TextInput
            type="text"
            id={"username"}
            name={"username"}
            placeholder={"username or email"}
            className={""}
            value={this.state.username}
            onChange={e => this.onChange('username', e)}
            isInvalid={false}
          />
          <TextInput
            type="password"
            id={"password"}
            name={"password"}
            placeholder={"password"}
            className={""}
            value={this.state.password}
            onChange={e => this.onChange('password', e)}
            isInvalid={false}
          />
          <div className='grid-container'>
            <Button
              text={"Log In"}
              id={"login"}
              name={"login"}
              className={'basic-button-purple'}
              onClick={''}
              isDisabled={false}
              disabledClassName={'basic-button-purple-disabled'}
            />
            <Button
              text={"Forgot Password?"}
              id={"forgotPassword"}
              name={"forgotPassword"}
              className={'text-button'}
              onClick={''}
              isDisabled={false}
              disabledClassName={'text-button-disabled'}
              style={this.styles.forgotPassword}
            />
            <Button
              text={"Don't have an Account?"}
              id={"freeAccount"}
              name={"freeAccount"}
              className={'text-button'}
              onClick={''}
              isDisabled={false}
              disabledClassName={'text-button-disabled'}
              style={this.styles.createAccount}
            />
          </div>
        </Form>
        <Footer className={'footer'} >{CONST.footer_text}</Footer>
      </div>
    )
  }
}

export default ForgotPasswordPage;