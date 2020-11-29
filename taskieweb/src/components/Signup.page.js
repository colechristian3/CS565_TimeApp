import React from 'react';
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
import Select from "./Select.atom";
import Checkbox from "./Checkbox.atom";
import {Auth, Hub} from 'aws-amplify';
import {connect} from "react-redux";
import {SET_USER} from "../redux/actionTypes";
import {Organization, OrganizationUser, User} from "../models/Models";
import { v4 as uuid } from 'uuid';


class SignupPage extends SignUp {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      orgName: '',
      orgIndustry: '',
      orgState: '',
      redirect: { bool: false, path: '' },
      errorMessage: '',
      page: 'personal',
      terms: false
    };
    this.styles = {
      flexContainer: { display: 'flex', flexDirection: 'column', justifyContent: "start", alignItems: 'center', flexWrap: 'no-wrap'},
      logo: {paddingRight: '15px', paddingLeft: '15px', height: '10%', width: 'auto', margin: '10px', marginTop: '30px'},
      loginCard: { background: 'white', maxWidth: '400px', minWidth: '300px', height: 'auto', margin: '15px', marginTop: '50px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'},
      header: { textAlign: 'center', fontWeight: 'normal', alignSelf: 'center', width: '100%'},
      errorMessage: { width: '100%', paddingLeft: '5px', fontSize: '15px', marginTop: '-10px', height: 'auto', textAlign: 'center'},
      input: {width: '100%', height: '36px', margin: '10px', alignSelf: 'center'},
      stateInput: {width: '100%', height: '36px', margin: '10px', alignSelf: 'center', textAlign: 'center'},
      buttonContainer: {width: '100%', alignContent: 'space-between', display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap', justifyContent: 'space-between', margin: '10px'},
      continueButton: {height: '44px'},
      cancelInput: {height: '44px'},
      backButton: {height: '44px', alignSelf: 'flex-end', marginRight: '10px'},
      terms: {margin: '10px', fontSize: '14px'}
    }
    this._validAuthStates = ["signUp"];
    Hub.listen('auth', (data) => {
      const errorMsg = data.payload.data.message ? data.payload.data.message : '';
      this.setState({errorMessage: errorMsg});

    });
  }

  async signUp() {
    const { username, password, email, firstname, lastname, terms, phone} = this.inputs;
    const param = {
      username,
      password,
      attributes:{
        email,
        phone_number: phone,
        'custom:firstName': firstname,
        'custom:lastName': lastname,
        'custom:terms': terms ? 'true' : 'false'
      }
    }
    let state = this.state;
    this.props.dispatch({
      type: SET_USER,
      payload: { firstName: state.firstName, lastName: state.lastName, email: state.email, username: state.username, phone: state.phone, orgName: state.orgName, orgIndustry: state.orgIndustry, orgState: state.orgState, terms: state.terms }
    });

    Auth.signUp(param)
      .then(async () => {
        let userId = uuid();
        let orgId = uuid();
        let orgUserId = uuid();

        await new User(this.state).dispatchUpdate({id: userId}).qCreate();
        await new Organization(this.state).dispatchUpdate({id: orgId}).qCreate();
        await new OrganizationUser({organization: orgId, user: userId, id: orgUserId}).qCreate();

        this.changeState('confirmSignUp', username);
      })
      .catch(err => {});
  }

  onChange(key, event){
    switch(key) {
      case 'firstName':
        this.setState({ firstName: event.target.value });
        this.handleInputChange(event);
        break;
      case 'lastName':
        this.setState({ lastName: event.target.value });
        this.handleInputChange(event);
        break;
      case 'email':
        this.setState({ email: event.target.value });
        this.handleInputChange(event);
        break;
      case 'username':
        this.setState({ username: event.target.value });
        this.handleInputChange(event);
        break;
      case 'password':
        this.setState({ password: event.target.value });
        this.handleInputChange(event);
        break;
      case 'orgName':
        this.setState({ orgName: event.target.value });
        break;
      case 'orgIndustry':
        this.setState({ orgIndustry: event.target.value });
        break;
      case 'orgState':
        this.setState({ orgState: event.target.value });
        break;
      case 'terms':
        this.setState({ terms: event.target.value });
        this.handleInputChange(event);
        break;
      case 'phone':
        this.setState({ phone: event.target.value });
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

  onContinueClick = () => {
    this.setState({ page: 'organizational' })
  }

  onBackClick = () => {
    this.setState({ page: 'personal' })
  }

  renderOrganizationInfoView = () => {
    if(this.state.page === 'organizational') {
      return (
        <Form className="white-background grid-container" style={this.styles.loginCard}>
          <h2 style={this.styles.header}>Organizational Info</h2>
          <ErrorMessage
            text={this.state.errorMessage}
            className="error-text"
            style={this.styles.errorMessage}
          />
          <TextInput
            type="text"
            id={"orgName"}
            name={"orgName"}
            key={'orgName'}
            placeholder={"Organization name"}
            style={this.styles.input}
            value={this.state.orgName}
            onChange={e => this.onChange('orgName', e)}
            isInvalid={false}
          />
          <TextInput
            type="text"
            id={"orgIndustry"}
            name={"orgIndustry"}
            key={'orgIndustry'}
            placeholder={"Industry (exp: painting)"}
            style={this.styles.input}
            value={this.state.orgIndustry}
            onChange={e => this.onChange('orgIndustry', e)}
            isInvalid={false}
          />
          <Select
            selectClassName={'select-input'}
            name={'selectState'}
            id={'selectState'}
            key={'selectState'}
            selectStyle={this.styles.stateInput}
            value={this.state.orgState}
            onChange={e => this.onChange('orgState', e)}
            options={CONST.states}
          />
          <Checkbox
            id={"terms"}
            name={"terms"}
            text={" You agree to our Terms, Data Policy and Cookies Policy."}
            className={"text-align-left"}
            key="terms"
            style={this.styles.terms}
            value={this.state.terms}
            onChange={e => this.onChange('terms', e)}
            isInvalid={false}
          />
          <div style={this.styles.buttonContainer}>
            <Button
              text={"Cancel"}
              id={"cancel"}
              name={"cancel"}
              className={'basic-button-lightgrey'}
              onClick={() => this.changeState('signIn')}
              style={this.styles.cancelButtonOrg}
              isDisabled={false}
              disabledClassName={'basic-button-lightgrey-disabled'}
            />
            <div>
              <Button
                text={"Back"}
                id={"back"}
                name={"back"}
                style={this.styles.backButton}
                className={'basic-button-lightgrey'}
                onClick={() => this.onBackClick()}
                isDisabled={false}
                disabledClassName={'basic-button-lightgrey-disabled'}
              />
              <Button
                text={"Create"}
                id={"create"}
                name={"create"}
                className={'basic-button-purple'}
                onClick={this.signUp}
                style={this.styles.createButton}
                isDisabled={false}
                disabledClassName={'basic-button-purple-disabled'}
              />
            </div>
          </div>
        </Form>
      );
    }
  }

  renderPersonalInfoView = () => {
    if(this.state.page === 'personal') {
      return (
        <Form className="white-background grid-container" style={this.styles.loginCard}>
          <h2 style={this.styles.header}>Create an account</h2>
          <ErrorMessage
            text={this.state.errorMessage}
            className="error-text"
            style={this.styles.errorMessage}
          />
          <TextInput
            type="text"
            id={"firstname"}
            name={"firstname"}
            placeholder={"First name"}
            key="firstName"
            style={this.styles.input}
            value={this.state.firstName}
            onChange={e => this.onChange('firstName', e)}
            isInvalid={false}
          />
          <TextInput
            type="text"
            id={"lastname"}
            name={"lastname"}
            key="lastName"
            placeholder={"Last name"}
            style={this.styles.input}
            value={this.state.lastName}
            onChange={e => this.onChange('lastName', e)}
            isInvalid={false}
          />
          <TextInput
            type="text"
            id={"username"}
            name={"username"}
            key="username"
            placeholder={"Username"}
            value={this.state.username}
            style={this.styles.input}
            onChange={e => this.onChange('username', e)}
            isInvalid={false}
          />
          <TextInput
            type="password"
            id={"password"}
            name={"password"}
            key="password"
            placeholder={"Password"}
            value={this.state.password}
            style={this.styles.input}
            onChange={e => this.onChange('password', e)}
            isInvalid={false}
          />
          <TextInput
            type="text"
            id={"email"}
            name={"email"}
            key="email"
            placeholder={"Email"}
            value={this.state.email}
            style={this.styles.input}
            onChange={e => this.onChange('email', e)}
            isInvalid={false}
          />
          <TextInput
            type="text"
            id={"phone"}
            name={"phone"}
            key="phone"
            placeholder={"Phone"}
            value={this.state.phone}
            style={this.styles.input}
            onChange={e => this.onChange('phone', e)}
            isInvalid={false}
          />
          <div style={this.styles.buttonContainer}>
            <Button
              text={"Cancel"}
              id={"cancel"}
              name={"cancel"}
              className={'basic-button-lightgrey'}
              onClick={() => this.changeState('signIn')}
              style={this.styles.cancelInput}
              isDisabled={false}
              disabledClassName={'basic-button-lightgrey-disabled'}
            />
            <Button
              text={"Continue"}
              id={"continue"}
              name={"continue"}
              className={'basic-button-purple'}
              onClick={() => this.onContinueClick()}
              style={this.styles.continueButton}
              isDisabled={false}
              disabledClassName={'basic-button-purple-disabled'}
            />
          </div>
        </Form>
      );
    }
  }


  showComponent(theme) {
    return (
      <div className="gradient-background full-window grid-container" style={this.styles.flexContainer} >
        <Logo src={ CONST.logoUrl }
              alt="Taskie Logo"
              style={this.styles.logo}
        />
        {this.renderOrganizationInfoView()}
        {this.renderPersonalInfoView()}
        <Footer className={'footer'} >{CONST.footer_text}</Footer>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return { firstName: state.firstName, lastName: state.lastName, email: state.email, username: state.username, phone: state.phone, orgName: state.orgName, orgIndustry: state.orgIndustry, orgState: state.orgState, terms: state.terms }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);

// export default SignupPage;