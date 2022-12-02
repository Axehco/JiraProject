import React from 'react';
import './App.css';
// import {ProjectListScreen} from 'screens/project-list'
// import {TeReactTest} from 'extra/try_use_array'
// import {LoginScreen} from 'login/'
import { useAuth } from 'context/auth-context'
import { AuthenticatedApp } from 'authenticated-app'
import { UnauthenticatedApp } from 'unauthenticated-app'

function App() {
  const user = useAuth()
  // console.log(user)
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TeReactTest /> */}
      {/* <LoginScreen /> */}
      {/* {
        user ? <AuthenticatedApp /> : <UnauthenticatedApp />
      } */}
      {
        user ? <UnauthenticatedApp /> : <AuthenticatedApp />
      }
      {/* <UnauthenticatedApp></UnauthenticatedApp> */}
      {/* <button onClick={() => console.log(user.user)}>dianji</button> */}
    </div>
  );
}

export default App;
