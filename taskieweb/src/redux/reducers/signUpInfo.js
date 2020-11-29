import { ADD_NEW_SIGN_UP } from "../actionTypes";

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  terms: false,
  phone: '',
  orgName: '',
  orgIndustry: '',
  orgState: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_SIGN_UP: {
      const { firstName, lastName, username, email, phone, terms, orgName, orgIndustry, orgState} = action.payload;
      return {
        ...state,
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        phone: phone,
        terms: terms,
        orgName: orgName,
        orgIndustry: orgIndustry,
        orgState: orgState
      };
    }
    default:
      return state;
  }
}
