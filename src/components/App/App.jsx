import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from '../../pages/home/Home';
// import Button from 'react-bootstrap/Button';

class App extends React.Component{
	render(){
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route path="/" component ={Home}/>
					</Switch>
				</BrowserRouter>
   			</div>
		)
	}
}

export default App;
