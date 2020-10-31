import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import SignupPage from 'pages/Signup';
import MainPage from 'pages/Main';


// import Button from 'react-bootstrap/Button';


function PrivateRoute ({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={props => props.isLoggedIn === true
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/', 
          state: {from: props.location}
          }} /> }
    />
  )
}

let isLoggedIn = false;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/dashboard" component={HomePage} />
          {/* <PrivateRoute isLoggedIn={isLoggedIn} path='/dashboard' component={HomePage} /> */}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
