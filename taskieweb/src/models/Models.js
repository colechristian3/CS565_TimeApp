import {SET_USER, SET_ORGANIZATION} from "../redux/actionTypes";
import _ from 'lodash';
import {API, graphqlOperation} from 'aws-amplify';
import {createOrganization, createUser, updateOrganization, updateUser} from '../graphql/mutations';
import {ERROR} from '../constants';

export class User {
  constructor(user) {
    this.user = {
      id: user.id,
      organization: user.organization,
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,
      email: user.email,
      phone: user.phone,
      picture: user.picture,
      payType: user.payType,
      payRate: user.payRate,
      terms: user.terms,
      isClockedIn: user.isClockedIn,
      address: user.address,
      userConfirmed: user.userConfirmed,
      authUser: user.authUser,
    }
  }

  // UPDATES STORE
  dispatchAddNew(dispatchFunction) {
    dispatchFunction({
      type: SET_USER,
      payload: {...this.user}
    });
    return this.user;
  }

  // UPDATES STORE
  dispatchUpdate(newUser, dispatchFunction) {
    this.user = _.assignIn(this.user, newUser);
    dispatchFunction({
      type: SET_USER,
      payload: {...this.user}
    });
    return this.user;
  }

  // Validate there are the correct
  validateForSave(){
    if(this.user.firstName
    && this.user.lastName
    && this.user.email
    && this.user.phone){
      throw new Error(ERROR.INVALID_ARGUMENTS);
    }
  }



  qUpdate() {
    let removedAuthUser = new User(this.user);
    delete removedAuthUser['authUser'];
    delete removedAuthUser['password'];
    return API.graphql(graphqlOperation(updateOrganization, {...this.user}));
  }
  qCreate(){
    let removedAuthUser = new User(this.user);
    delete removedAuthUser['authUser'];
    delete removedAuthUser['password'];
    return API.graphql(graphqlOperation(createOrganization, {...this.user}));
  }
}

export class Organization {
  constructor(org) {
    this.org = {
      id: org.id,
      name: org.name,
      owner: org.owner,
      phone: org.phone,
      industry: org.industry,
      website: org.website,
      logo: org.logo,
      address: org.address
    }
  }

  // UPDATES STORE
  dispatchAddNew(dispatchFunction) {
    dispatchFunction({
      type: SET_ORGANIZATION,
      payload: {...this.org}
    });
    return this.org;
  }

  // UPDATES STORE
  dispatchUpdate(newOrg, dispatchFunction) {
    this.org = _.assignIn(this.org, newOrg);
    dispatchFunction({
      type: SET_ORGANIZATION,
      payload: {...this.org}
    });
    return this.org;
  }

  // Validate there are the correct
  validateForSave(){
    if(this.org.name
      && this.org.industry){
      throw new Error(ERROR.INVALID_ARGUMENTS);
    }
  }

  // Saves to DB
  qUpdate() {
    return API.graphql(graphqlOperation(updateOrganization, {...this.org}));
  }
  qCreate(){
      return API.graphql(graphqlOperation(createOrganization, {...this.org}));
  }
}

export class OrganizationUser {
  constructor(d) {
    this.d = {
      id: d.id,
      organization: d.organization,
      user: d.user
    }
  }

  // Validate there are the correct
  validateForSave(){
    if(this.d.id
      && this.d.organization
      && this.d.user){
      throw new Error(ERROR.INVALID_ARGUMENTS);
    }
  }

  // Saves to DB
  qUpdate() {
    return API.graphql(graphqlOperation(updateOrganization, {...this.d}));
  }
  qCreate(){
    return API.graphql(graphqlOperation(createOrganization, {...this.d}));
  }
}
