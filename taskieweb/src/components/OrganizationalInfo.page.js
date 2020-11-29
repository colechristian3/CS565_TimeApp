import React, { Component } from 'react';
import '../styles/main.css'
import { Form, Button } from 'react-bootstrap';
import Logo from './Logo.atom'
import { connect } from "react-redux";
import store from '../redux/store';
import { CONST } from '../constants';

class OrganizationalInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.orgInfoStore = store.getState().organizationalInfo
    this.state = { name: this.orgInfoStore.name, speciality: "", phone: "", addressOne: "", addressTwo: "", city: "", State: "", zip: "" };
    this.updateName = this.updateName.bind(this);
    this.updateSpeciality = this.updateSpeciality.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateAddressOne = this.updateAddressOne.bind(this);
    this.updateAddressTwo = this.updateAddressTwo.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateName = event => {
    this.setState({name: event.target.value})
    this.props.dispatch({
      type: 'ADD_ORGANIZATION',
      payload: { name: this.state.name }
    })
  }

  updateSpeciality = event => {
    this.setState({speciality: event.target.value})
    this.props.dispatch({
      type: 'ADD_ORGANIZATION',
      payload: { speciality: this.state.speciality }
    })
  }

  updatePhone = event => {
    this.setState({phone: event.target.value})
    this.props.dispatch({
      type: 'ADD_ORGANIZATION',
      payload: { phone: this.state.phone }
    })
  }

  updateAddressOne = event => {
    this.setState({addressOne: event.target.value})
    this.props.dispatch({
      type: 'ADD_ORGANIZATION',
      payload: { addressOne: this.state.addressOne }
    })
  }

  updateAddressTwo = event => {
    this.setState({addressTwo: event.target.value})
    this.props.dispatch({
      type: 'ADD_ORGANIZATION',
      payload: { addressTwo: this.state.addressTwo }
    })
  }

  updateCity = event => {
    this.setState({city: event.target.value})
    this.props.dispatch({
      type: 'ADD_ORGANIZATION',
      payload: { city: this.state.city }
    })
  }

  updateState = event => {
    this.setState({State: event.target.value})
    this.props.dispatch({
      type: 'ADD_ORGANIZATION',
      payload: { State: this.state.State }
    })
  }

  updateZip = event => {
    this.setState({zip: event.target.value})
    this.props.dispatch({
      type: 'ADD_ORGANIZATION',
      payload: { zip: this.state.zip }
    })
  }

  render() {
    return(
      <div className="gradient-background full-window p-3" >
        <div className="white-background p-4 radius5 org-info-card center-horizontal">
          <h2 className="pb-2 font-weight-normal ">Organizational Info</h2>
          <Form className="">
            <Form.Group controlId="formOrgName">
              <Form.Label>Basic Info</Form.Label>
              <Form.Control type="name" placeholder="Organizational Name" onChange={ this.updateName } value={this.state.name} />
            </Form.Group>

            <Form.Group controlId="formOrgSpeciality">
              <Form.Control type="speciality" placeholder="Industry Speciality (exp: Painting)"  onChange={this.updateSpeciality} value={this.state.speciality}/>
            </Form.Group>
            <Form.Group controlId="formOrgPhone">
              <Form.Control type="phone" placeholder="Contact Number" onChange={this.updatePhone} value={this.state.phone}/>
            </Form.Group>
            <Form.Group controlId="formOrgStreet">
              <Form.Label>Address</Form.Label>
              <Form.Control type="streetOne" placeholder="Street One" className="mb-1" onChange={this.updateAddressOne} value={this.state.addressOne}/>
              <Form.Control type="streetTwo" placeholder="Street Two" className="mb-1" onChange={this.updateAddressTwo} value={this.state.addressTwo}/>
              <Form.Control type="city" placeholder="City" className="mb-1" onChange={this.updateCity} value={this.state.city}/>
              <Form.Control type="state" placeholder="State" className="mb-1" onChange={this.updateState} value={this.state.State}/>
              <Form.Control type="zip" placeholder="Zip Code" className="mb-1" onChange={this.updateZip} value={this.state.zip}/>
            </Form.Group>

            <div className="d-flex flex-row-reverse">
              <Button className="purple-button ml-2" variant="primary" type="continue">
                Continue
              </Button>
              <Button variant="secondary" type="back">
                Back
              </Button>
            </div>
          </Form>
        </div>
        <Logo
          className="height25 "
          src={CONST.logoUrl}/>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return { name: state.name, speciality: state.speciality, phone: state.phone, addressOne: state.addressOne, addressTwo: state.addressTwo, city: state.city, State: state.State, zip: state.zip }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationalInfoPage);
