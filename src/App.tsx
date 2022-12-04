import React from 'react';
import './App.css';

import { useAuth } from 'context/auth-context'
import { AuthenticatedApp } from 'authenticated-app'
import { UnauthenticatedApp } from 'unauthenticated-app'

// import {TeReactTest} from 'extra/try_use_array'
// import {LoginScreen} from 'unauthenticated-app/login'
// import {RegisterScreen} from 'unauthenticated-app/register'
// import {ProjectListScreen} from 'screens/project-list'

function App() {
  const user = useAuth()
  return (
    <div className="App">
      {
        user === null ? <AuthenticatedApp /> : <UnauthenticatedApp />
      }
    </div>
  );
}

export default App;
