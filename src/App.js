import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Top from "./components/top";
import Result from "./components/result";

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			result: {
				restaurants: [],
				members: []
			}
		}
	}

	setResult = (result) => {
		this.setState({
			result: result
		})
	}

	render() {
		return(
			<BrowserRouter>
				<div>
					<Route exact path="/" component={ () => (<Top setResult = { this.setResult } />) } />
					<Route path="/result" component={ () => (<Result { ...this.state } />) } />
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
