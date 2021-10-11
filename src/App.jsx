import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css'
class App extends React.Component {
 
  
  render() {

    return (
      <Router>
          <Route exact path="/" component={Home}  />
          <Route path="/login" component={Login}  />
        
      </Router>
    );
  }
}

export default App;

