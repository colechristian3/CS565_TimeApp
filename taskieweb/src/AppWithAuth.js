import React from "react";
import { Authenticator } from "aws-amplify-react";
import config from "./aws-exports";
import CustomSignIn from "./components/CustomLogIn.page";
import ConfirmSignInPage from "./components/ConfirmSignup.page"
import App from "./App";
import SignupPage from "./components/Signup.page";
import store from "./redux/store";
import {Provider} from "react-redux";
import _ from 'lodash';


class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  mapErrorMessage = (message) => {
    if (/incorrect.*username.*password/i.test(message)) {
      return 'Incorrect username or password';
    }

    return message;
  }

  render() {
    //  Default error banner that is enabled when developing
    const awsTheme = {}
    if(!_.isEqual(process.env.NODE_ENV,'dev')) {
      this.awsTheme = { toast: {backgroundColor: 'transparent', height: '0px', width: '0px', color: 'transparent'} };
    }
    return (
      <div>
        <Provider store={store}>
          <Authenticator hideDefault={true} amplifyConfig={config} errorMessage={this.mapErrorMessage} theme={awsTheme}>
            <SignupPage/>
            <CustomSignIn/>
            <ConfirmSignInPage/>
            <App />
          </Authenticator>
        </Provider>
      </div>
    );
  }
}

export default AppWithAuth;