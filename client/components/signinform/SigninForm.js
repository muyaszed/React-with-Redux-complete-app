import React, {Component} from 'react';

class SigninForm extends Component {
	constructor(props) {
		super(props);
		

		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}


	handleOnChange(e) {
		let name = e.target.name;
		let obj = {};
		obj[name] = e.target.value;

		return this.props.onUserInput(obj);
	}

	handleOnSubmit(e) {
		e.preventDefault();
		this.props.onSubmit();
	}


	render() {
		return(
			<form onSubmit = {this.handleOnSubmit}>
			<div className="grid-x">
  					<div className="small-12 cell">
	  					<label>
	  						Your Username
	  						<input 
	  							type="text" 
	  							name="username"
	  							value={this.props.userData.username}
	  							onChange = {this.handleOnChange} />
	  					</label>
  					</div>
  					<div className="small-12 cell">
	  					<label>
	  						Your email
	  						<input 
	  							type="email" 
	  							name="email"
	  							value={this.props.userData.email}
	  							onChange = {this.handleOnChange} />
	  					</label>
  					</div>
  					<div className="small-12 cell">
	  					<label>
	  						Your password
	  						<input 
	  							type="password" 
	  							name="password"
	  							value={this.props.userData.password}
	  							onChange = {this.handleOnChange} />
	  					</label>
  					</div>

					<div className="small-12 cell">
	  					<label>
	  						Your password confirmation
	  						<input 
	  							type="password" 
	  							name="passwordConfirmation"
	  							value={this.props.userData.passwordConfirmation}
	  							onChange = {this.handleOnChange} />
	  					</label>
  					</div>

  					<div className="small-12 cell">
  					
  						<input type="submit" className="button"/>
  					
  					</div>
  					
			</div>
			</form>
		);
	}
}

export default SigninForm;