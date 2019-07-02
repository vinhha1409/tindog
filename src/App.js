import React ,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import NaviBar from './main-page/nav-bar';
import Home from './routes/home';
import Error from './routes/error';
import MemRoute from './routes/member';


class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Router>
          <NaviBar />
        <Switch>          
          <Route exact path="/" component={Home}/>
          <Route path="/member" component={MemRoute}/>
          <Route component={Error}/>
        </Switch>
      </Router>
      </div>
    );
  }
  
}

export default App;
