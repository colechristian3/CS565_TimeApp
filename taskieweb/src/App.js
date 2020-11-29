/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from "./aws-exports";
// import { createOrganization } from './graphql/mutations'
// import { listOrganizations } from './graphql/queries'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive'

import { withAuthenticator } from '@aws-amplify/ui-react'
import { SignIn, Authenticator } from "aws-amplify-react";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

import { CONST } from "./constants";
import LogInPage from "./components/CustomLogIn.page"
import ForgotPasswordPage from "./components/ForgotPassword.page";
import SignupPage from "./components/Signup.page";
import HomePage from "./components/Home.page";

Amplify.configure(awsExports);
window.store = store;


const initialState = { name: '', phone: '', speciality: '' }

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.client = null;
  }



  render() {
    if (this.props.authState == "signedIn") {
      return (
        <Router>
          <Switch>
            {/*<Route path="/login">*/}
            {/*  <LogInPage*/}
            {/*    screen={getScreenSize}/>*/}
            {/*</Route>*/}
            {/*<Route path="/recovery">*/}
            {/*  <ForgotPasswordPage*/}
            {/*    screen={getScreenSize}/>*/}
            {/*</Route>*/}
            {/*<Route path="/signup">*/}
            {/*  <SignupPage/>*/}
            {/*</Route>*/}
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Router>
      )
    }else {
      return null;
    }
  }
  //
  //
  // const [formState, setFormState] = useState(initialState)
  // const [todos, setTodos] = useState([])
  //
  //
  // useEffect(() => {
  //   fetchTodos()
  // }, [])
  //
  // function setInput(key, value) {
  //   setFormState({ ...formState, [key]: value })
  // }
  //
  // async function fetchTodos() {
  //   try {
  //     const todoData = await API.graphql(graphqlOperation(listOrganizations))
  //     const todos = todoData.data.listOrganizations.items
  //     setTodos(todos)
  //   } catch (err) { console.log('error fetching todos') }
  // }
  //
  // async function addTodo() {
  //   try {
  //     if (!formState.name || !formState.phone || !formState.speciality) return
  //     const todo = { ...formState }
  //     setTodos([...todos, todo])
  //     setFormState(initialState)
  //     await API.graphql(graphqlOperation(createOrganization, {input: todo}))
  //   } catch (err) {
  //     console.log('error creating todo:', err)
  //   }
  // }

  // return (
  //     // <div style={styles.container}>
  //     //   <h2>Create Organization</h2>
  //     //   <input
  //     //       onChange={event => setInput('name', event.target.value)}
  //     //       style={styles.input}
  //     //       value={formState.name}
  //     //       placeholder="Organization Name"
  //     //   />
  //     //   <input
  //     //       onChange={event => setInput('phone', event.target.value)}
  //     //       style={styles.input}
  //     //       value={formState.phone}
  //     //       placeholder="Phone Number"
  //     //   />
  //     //   <input
  //     //       onChange={event => setInput('speciality', event.target.value)}
  //     //       style={styles.input}
  //     //       value={formState.speciality}
  //     //       placeholder="Industry Speciality"
  //     //   />
  //     //   <button style={styles.button} onClick={addTodo}>Save</button>
  //     //   {
  //     //     todos.map((todo, index) => (
  //     //         <div key={todo.id ? todo.id : index} style={styles.todo}>
  //     //           <p style={styles.todoName}>{todo.name}</p>
  //     //           <p style={styles.todoName}>{todo.phone}</p>
  //     //           <p style={styles.todoName}>{todo.speciality}</p>
  //     //           <p style={styles.todoName}>{todo.uuid}</p>
  //     //         </div>
  //     //     ))
  //     //   }

  // )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

// export default withAuthenticator(App, false, [
//   <CustomSignIn/>
// ]);
// export default withAuthenticator(App);

export default App;
