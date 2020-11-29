import { combineReducers } from "redux";

import organizationalInfo from "./organizationalInfo";
import signUpInfo from "./signUpInfo";
import UserStore from "./UserStore";

export default combineReducers({
  organizationalInfo,
  signUpInfo,
  UserStore
});
