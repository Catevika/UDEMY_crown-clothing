import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	handlesubmit = e => {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in' onSubmit={this.handlesubmit}>
				<h2>I already have an account</h2>
				<span>Sign in with your email and your password</span>
				<form>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='Password'
						required
					/>
					<CustomButton type='submit'>Submit Form</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
