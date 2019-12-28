import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import LoginForm from './components/LoginForm.js';
import SignUpForm from './components/SignUpForm.js';
import Landing from './components/Landing.js';
import Registration from './components/Registration.js';
import About from './components/About.js';
import Destination from './components/Destination.js';
import Booking from './components/Booking.js';
import Home from './components/Home.js';



class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={rProps => <Landing {...rProps}/>}/>
          <Route exact path="/home" render={rProps => <Home {...rProps}/>}/>
          <Route path="/registration"render={rProps => <Registration {...rProps}/>}/>
          <Route exact path="/login" render={rProps => <LoginForm {...rProps}/>}/>
          <Route exact path="/signup" render={rProps => <SignUpForm {...rProps}/>}/>
          <Route exact path="/about" render={rProps => <About {...rProps}/>}/>
          <Route exact path="/destination" render={rProps => <Destination {...rProps}/>}/>
          <Route exact path="/booking/:location" render={rProps => <Booking {...rProps}/>}/>
        </Switch>
      </div>
    )
  }
}





export default App;
