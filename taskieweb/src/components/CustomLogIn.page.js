import React from 'react';
import '../styles/main.css';
import { SignIn } from 'aws-amplify-react';
import Form from "./Form.molecule"
import Logo from "./Logo.atom";
import { CONST } from "../constants"
import TextInput from "./TextInput.atom";
import Button from "./Button.atom";
import Footer from "./Footer.molecule";
import { Redirect } from 'react-router-dom';
import ErrorMessage from "./ErrorMessage.atom";
import Loading from "./Loading.atom"
import { Hub } from "aws-amplify";
import { API } from "aws-amplify";


class LogInPage extends SignIn {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      // password: '',
      redirect: { bool: false, path: '' },
      errorText: '',
      loading: false
    };
    this.styles = {
      loginCard: { background: 'white', gridColumn: '2', gridRow: '3' },
      gridContainer: { gridTemplateColumns: 'auto 300px auto', gridTemplateRows: 'auto auto 415px auto auto 20px' },
      logo: {paddingRight: '15px', paddingLeft: '15px', opacity: "0.8"},
      forgotPassword: { fontSize: '13px'},
      buttonGridContainer: { gridTemplateColumns: 'auto auto auto', gridTemplateRows: 'auto auto'},
      createAccount: { fontSize: '17px',  marginTop: '30px'},
      errorMessage: { paddingLeft: '5px', fontSize: '15px', marginTop: '-10px', textAlign: 'center'},
      loader: {width: '30px', height: '30px', margin: 'auto'}
    }
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    Hub.listen('auth', (data) => {
      const errorMsg = data.payload.data.message ? data.payload.data.message : '';
      this.setState({errorText: errorMsg});
    });
  }

  addUserToStore = () => {
    const user = {
      name: 'Todo 1',
      description: 'Learn AWS AppSync'
    };
  }

  handleLogin = (e) => {
    super.signIn()
      .then(() => this.changeState('signedIn'));
    this.setState({loading: true})
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

  showComponent(theme) {
    return (
      <div className="gradient-background full-window grid-container" style={this.styles.gridContainer} >
        {this.renderRedirect()}
        <Form className="white-background" style={this.styles.loginCard}>
          <Logo src={ CONST.logoFullUrl }
                alt="Taskie Logo"
                style={this.styles.logo}
          />
          <ErrorMessage
            text={this.state.errorText}
            className="error-text"
            style={this.styles.errorMessage}
          />
          <TextInput
            type="text"
            id={"username"}
            name={"username"}
            key={'username'}
            placeholder={"username or email"}
            className={""}
            value={this.state.username}
            onChange={this.handleInputChange}
            isInvalid={false}
          />
          <TextInput
            type="password"
            id={"password"}
            name={"password"}
            placeholder={"password"}
            key={'password'}
            className={""}
            value={this.state.password}
            onChange={this.handleInputChange}
            isInvalid={false}
          />
          <div className='grid-container'>
            <Button
              text={this.state.loading ? undefined : "Log In"}
              id={"login"}
              name={"login"}
              className={'basic-button-purple'}
              onClick={(e) => this.handleLogin(e)}
              isDisabled={false}
              disabledClassName={'basic-button-purple-disabled'}
            >
              {this.state.loading ? <Loading style={this.styles.loader}/> : undefined}
            </Button>
            <Button
              text={"Forgot Password?"}
              id={"forgotPassword"}
              name={"forgotPassword"}
              className={'text-button'}
              onClick={() => super.changeState("forgotPassword")}
              isDisabled={false}
              disabledClassName={'text-button-disabled'}
              style={this.styles.forgotPassword}
            />
            <Button
              text={"Don't have an Account?"}
              id={"freeAccount"}
              name={"freeAccount"}
              className={'text-button'}
              onClick={() => super.changeState("signUp")}
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

export default LogInPage;