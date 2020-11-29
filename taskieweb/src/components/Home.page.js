import React from 'react';
import '../styles/main.css';
import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';
import Form from "./Form.molecule"
import Logo from "./Logo.atom";
import { CONST } from "../constants"
import TextInput from "./TextInput.atom";
import Button from "./Button.atom";
import Footer from "./Footer.molecule";
import { Redirect } from 'react-router-dom';
import ErrorMessage from "./ErrorMessage.atom";


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: { bool: false, path: '' },
      errorText: ''
    };
    this.styles = {
      loginCard: { background: 'white', gridColumn: '2', gridRow: '3' },
      gridContainer: { gridTemplateColumns: 'auto 300px auto', gridTemplateRows: 'auto auto 415px auto auto 20px' },
      logo: {paddingRight: '15px', paddingLeft: '15px', opacity: "0.8"},
      forgotPassword: { fontSize: '13px'},
      buttonGridContainer: { gridTemplateColumns: 'auto auto auto', gridTemplateRows: 'auto auto'},
      createAccount: { fontSize: '17px',  marginTop: '30px'},
      errorMessage: { paddingLeft: '5px', fontSize: '15px', marginTop: '-10px', height: '22px'}
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

  setRedirect = (path) => {
    this.setState({
      redirect: { bool: true, path: path }
    })
  }

  renderRedirect = () => {
    if (this.state.redirect.bool) {
      return <Redirect to={this.state.redirect.path} push={true}/>
    }
  }

  render() {
    return (
      <div className="gradient-background full-window grid-container" style={this.styles.gridContainer} >
        {this.renderRedirect()}
        <Form className="white-background" style={this.styles.loginCard}>
          <Logo src={ CONST.logoFullUrl }
                alt="Taskie Logo"
                style={this.styles.logo}
          />
          Home Page
          <ErrorMessage
            text={this.state.errorText}
            className="error-text"
            style={this.styles.errorMessage}
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
              onClick={() => this.setRedirect('/home')}
              isDisabled={false}
              disabledClassName={'basic-button-purple-disabled'}
            />
            <Button
              text={"Forgot Password?"}
              id={"forgotPassword"}
              name={"forgotPassword"}
              className={'text-button'}
              onClick={() => this.setRedirect('/recovery')}
              isDisabled={false}
              disabledClassName={'text-button-disabled'}
              style={this.styles.forgotPassword}
            />
            <Button
              text={"Don't have an Account?"}
              id={"freeAccount"}
              name={"freeAccount"}
              className={'text-button'}
              onClick={() => this.setRedirect('/signup')}
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

export default HomePage;