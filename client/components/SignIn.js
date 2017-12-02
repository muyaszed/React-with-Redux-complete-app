import React,  {Component} from 'react';
import SigninForm from './signinform/SigninForm';

class SignIn extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordConfirmation: ""
		}

		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleUserSubmit = this.handleUserSubmit.bind(this);
	}


	handleUserInput(obj) {
		this.setState(obj);
	}

	handleUserSubmit() {

		console.log(this.state);
	}

	render() {
		return(
			<div id="signin-container">

				<SigninForm userData={this.state} onUserInput={this.handleUserInput} onSubmit={this.handleUserSubmit}/>
				
			</div>
			
		);
	}
}

export default SignIn;