import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Routing
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch , Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
