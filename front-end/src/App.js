import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // add route later
import './App.css';
import ProfileSetUp from './screens/ProfileSetUp/index.js';
import LoginSignUp from './screens/LoginSignUp/index.js';
import { Provider } from './context';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingOverlay from './components/LoadingOverlay';
import AllSetUpScreen from './screens/AllSetUpScreen';
import DashBoard from './screens/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <div>
          <Route path="/" exact component={LoginSignUp} />
          <Route path="/allsetup" exact component={AllSetUpScreen} />
          <Route path="/dashboard" exact component={DashBoard} />
          <ProtectedRoute
            routeProps={{
              path: '/profilesetup',
              exact: true,
            }}
            component={ProfileSetUp}
          />

          <LoadingOverlay />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
