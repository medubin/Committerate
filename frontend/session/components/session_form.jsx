import React from 'react';
import { Link, withRouter } from 'react-router';
import Field from './_field'
import { connect } from 'react-redux';
import { login, logout, signup } from '../actions/session_actions';
import '../../app/scss/form.scss'



const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			passwordCheck: "",
			errors: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.handleFrontEndErrors()) {
			return;
		}
		const user = this.state;
		this.props.processForm({user});
	}

	handleFrontEndErrors() {
		let errors = [];
		if (this.state.password.length < 6) {
			errors.push("The Password must be at least 6 characters long.");
		}
		if (this.props.formType === "signup" && this.state.password !== this.state.passwordCheck) {
			errors.push("Passwords don't match.");
		}

		this.setState({errors: errors});

		return errors.length != 0;
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.concat(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let signUpOptions;
		if (this.props.formType === 'signup') {
			signUpOptions =
      <p className='form-item'>
        <label className='form-item-label' htmlFor="password-validate">Password</label>
        <input className='form-item-input' type="password" name="Password Validation" onChange={this.update('passwordCheck')} />
        <span className='form-item-description'>Retype password</span>
      </p>
		}

		return (
			<div className="form-container">
        <div className="form">
  				<form onSubmit={this.handleSubmit} >
  					Welcome to Commiter!
  					<br/>
  					Please {this.props.formType} or {this.navLink()}
  					{this.renderErrors()}

            <p className='form-item'>
              <label className='label' htmlFor="username">Username</label>
              <input className='input' type="text" name="Username" onChange={this.update('username')} />
              <span className='description'>Username</span>
            </p>

            <p className='form-item'>
              <label className='label' htmlFor="password">Password</label>
              <input className='input' type="password" name="Password" onChange={this.update('password')} />
              <span className='description'>Password</span>
            </p>

  					{ signUpOptions }
  					<input type="submit" value="Submit" className="submit-button" />

  				</form>
        </div>
			</div>
		);
	}

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SessionForm));
