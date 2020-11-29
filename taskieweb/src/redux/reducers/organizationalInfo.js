import { ADD_ORGANIZATION } from "../actionTypes";

const initialState = {
  name: '1',
  speciality: '1',
  phone: '1',
  addressOne: '',
  addressTwo: '',
  city: '',
  State: '',
  zip: '',

};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ORGANIZATION: {
      const { name, speciality, phone, addressOne, addressTwo, city, State, zip } = action.payload;
      return {
        ...state,
        name: name,
        speciality: speciality,
        phone: phone,
        addressOne: addressOne,
        addressTwo: addressTwo,
        city: city,
        State: State,
        zip: zip

      };
    }
    default:
      return state;
  }
}
