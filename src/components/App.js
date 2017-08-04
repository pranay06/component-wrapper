import { render } from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class App extends React.Component {
	render() {
		console.log("Inside Render");
		console.log(this.props);
		// const routeItems = <Route exact  path="/" component={this.props.routeItems[0]}/>
		const routeItems = this.props.routeItems.map((routeItem, index) => <Route exact key={index} path="/" component={routeItem}/>);
		return (
			<Router>
				<div>
					<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/topics">Topics</Link></li>
				    </ul>

				    <hr/>
				   {routeItems}
				</div>
			      
			</Router>
		);
	}
}




