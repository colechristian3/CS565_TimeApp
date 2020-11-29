import React, { useEffect } from 'react';
import '../styles/main.css';
import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';
import Form from "./Form.molecule"
import Logo from "./Logo.atom";
import { CONST } from "../constants"
import TextInput from "./TextInput.atom";
import Button from "./Button.atom";
import Footer from "./Footer.molecule";
import {Redirect} from "react-router-dom";
import ErrorMessage from "./ErrorMessage.atom";
import {Auth, Hub} from 'aws-amplify';
import store from '../redux/store';
import _ from 'lodash';


class ConfirmSignUpPage extends ConfirmSignUp {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      code: '',
      phone: '',
      redirect: { bool: false, path: '' },
      errorMessage: '',
      state: '',
      loading: false,
    };
    this.styles = {
      flexContainer: { display: 'flex', flexDirection: 'column', justifyContent: "start", alignItems: 'center', flexWrap: 'no-wrap'},
      logo: {paddingRight: '15px', paddingLeft: '15px', height: '10%', width: 'auto', margin: '10px', marginTop: '30px'},
      loginCard: { background: 'white', maxWidth: '400px', minWidth: '300px', height: 'auto', margin: '15px', marginTop: '50px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'},
      header: { textAlign: 'center', fontWeight: 'normal', alignSelf: 'center', width: '100%'},
      errorMessage: { width: '100%', paddingLeft: '5px', fontSize: '15px', marginTop: '-10px', height: 'auto', textAlign: 'center'},
      input: {width: '100%', height: '36px', margin: '10px', alignSelf: 'center'},
      buttonContainer: {width: '100%', alignContent: 'space-between', display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap', justifyContent: 'space-between', margin: '10px'},
      confirmButton: {height: '44px'},
      resendButton: {height: '44px', alignSelf: 'flex-start'}
    }
    this._validAuthStates = ["confirmSignIn", "signUp"];
    Hub.listen('auth', (data) => {
      const errorMsg = data.payload.data.message ? data.payload.data.message : '';
      this.setState({errorMessage: errorMsg});
    });
  }

  userInfoStoreAndState = () =>{
    let UserStore = store.getState().UserStore;
    if(!_.isEqual(this.state.username, UserStore.username)
      || !_.isEqual(this.state.phone, UserStore.phone)
      || !_.isEqual(this.state.email, UserStore.email)
      || !_.isEqual(this.state.state, this.props.authState)
    ) {
      this.setState({username: UserStore.username, phone: UserStore.phone, email: UserStore.email, state: this.props.authState});
    }
  }

  handleSubmit = (event) => {
    const { code } = this.state;
    this.setState({ loading: true });

    Auth.confirmSignUp(this.state.username, code)
      .then(() => {
        this.changeState('signedIn');
      })
      .catch(err => {
        this.setState({
          errorMessage: err
        });
      });
  };

  async resendConfirmationCode() {
    try {
      await Auth.resendSignUp(this.state.username);
    } catch (err) {
    }
  }

  onChange(key, event){
    switch(key) {
      case 'code':
        this.setState({ code: event.target.value });
        this.handleInputChange(event);
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
    this.userInfoStoreAndState();
    if(_.isEqual(this.state.state, "signUp") || _.isEqual(this.state.state, "confirmSignUp")) {
      return (
        <div className="gradient-background full-window grid-container" style={this.styles.flexContainer}>
          <Logo src={CONST.logoUrl}
                alt="Taskie Logo"
                style={this.styles.logo}
          />
          <Form className="white-background grid-container" style={this.styles.loginCard}>
            <h2 style={this.styles.header}>Confirm contact</h2>
            <ErrorMessage
              text={this.state.errorMessage}
              className="error-text"
              style={this.styles.errorMessage}
            />
            A confirmation 6 digit code was sent to {this.state.email}
            <TextInput
              type="text"
              id={"code"}
              name={"code"}
              key={'code'}
              placeholder={"Enter code"}
              style={this.styles.input}
              value={this.state.code}
              onChange={e => this.onChange('code', e)}
              isInvalid={false}
            />
            <div style={this.styles.buttonContainer}>
              <Button
                text={"Resend Code"}
                id={"resend"}
                name={"resend"}
                style={this.styles.resendButton}
                className={'basic-button-lightgrey'}
                onClick={this.resendConfirmationCode}
                isDisabled={false}
                disabledClassName={'basic-button-lightgrey-disabled'}
              />
              <Button
                text={"Confirm"}
                id={"confirm"}
                name={"confirm"}
                className={'basic-button-purple'}
                onClick={() => this.handleSubmit()}
                style={this.styles.confirmButton}
                isDisabled={false}
                disabledClassName={'basic-button-purple-disabled'}
              />
            </div>
          </Form>
          <Footer className={'footer'}>{CONST.footer_text}</Footer>
        </div>
      )
    } else {
      return(
        ''
      );
    }
  }
}

export default ConfirmSignUpPage;