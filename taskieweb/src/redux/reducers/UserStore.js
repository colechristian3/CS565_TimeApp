import { SET_USER } from "../actionTypes";

const initialState = {
  id: '',
  organization: '',
  firstName: '',
  middleName: '',
  lastName: '',
  username: '',
  email: '',
  phone: '',
  picture: '',
  payType: '',
  payRate: '',
  terms: '',
  isClockedIn: '',
  address: '',
  userConfirmed: '',
  authUser: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      const p = action.payload;
      return {
        ...state,
        id: p.id,
        organization: p.organization,
        firstName: p.firstName,
        middleName: p.middleName,
        lastName: p.lastName,
        username: p.username,
        email: p.email,
        phone: p.phone,
        picture: p.picture,
        payType: p.payType,
        payRate: p.payRate,
        terms: p.terms,
        isClockedIn: p.isClockedIn,
        address: p.address,
        userConfirmed: p.userConfirmed,
        authUser: p.authUser
      };
    }
    default:
      return state;
  }
}
