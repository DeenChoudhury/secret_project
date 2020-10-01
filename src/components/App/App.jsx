import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import SignupPage from 'pages/Signup';

// import Button from 'react-bootstrap/Button';

class App extends React.Component{
	render(){
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component ={HomePage}/>
						<Route path="/dashboard" component ={HomePage}/>
						<Route path="/login" component ={LoginPage}/>
						<Route path="/signup" component ={SignupPage}/>
					</Switch>
				</BrowserRouter>
   		</div>
		);
	}
}

export default App;
