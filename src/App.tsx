import React from 'react';
import './App.css';
// import {TeReactTest} from 'extra/try_use_array'
// import {LoginScreen} from 'login/'
import { useAuth } from 'context/auth-context'
import { AuthenticatedApp } from 'authenticated-app'
import { UnauthenticatedApp } from 'unauthenticated-app'
// import {LoginScreen} from 'unauthenticated-app/login'
// import {RegisterScreen} from 'unauthenticated-app/register'
// import {ProjectListScreen} from 'screens/project-list'

function App() {
  const user = useAuth()
  // console.log(user)
  return (
    <div className="App">
      {
        user ? <UnauthenticatedApp /> : <AuthenticatedApp />
      }
      {/* <LoginScreen></LoginScreen>
      <RegisterScreen></RegisterScreen>
      <ProjectListScreen></ProjectListScreen> */}
    </div>
  );
}

export default App;
