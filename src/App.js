import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Top from "./components/top";
import Result from "./components/result";


const App = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={ Top } />
			<Route path="/result" component={ Result } />
		</div>
	</BrowserRouter>
)

export default App;
