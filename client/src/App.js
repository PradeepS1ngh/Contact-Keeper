import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Routing
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// Context
import ContactState from './Context/Contacts/ContactState'
import AuthState from './Context/Auth/AuthState'
import AlertState from './Context/Alert/AlertState'

//Components
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import MainHome from './components/pages/MainHome'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

import PrivateRoute from './components/Route/PrivateRoute'

import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}


function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Navbar />
            <div className='container' style={{ maxWidth: "1307px" }}>
              <Alert />
              <Switch>
                <Route exact path='/' component={MainHome} />
                <PrivateRoute exact path='/gettingStarted' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>

  );
}

export default App;
