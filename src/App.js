import React from 'react';
import Question from './components/Question/';
import Header from './components/Header';
import {Router, Route} from 'react-router-dom';
import Start from './components/Start';
import history from './history';
import Results from './components/Question/Results/'
import Loading from './components/Loading'
 
function App() {

	return (
		<Router history={history}>
			<Header />
			<Route exact path='/'>
				<Start />
			</Route>
			<Route path='/quiz'>
				<Loading>
					<Question/>
				</Loading>
			</Route>
			<Route path='/results'>
				<Results />
			</Route>
		</Router>
	);
}

export default App;
