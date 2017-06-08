import React from 'react';
import { Link, withRouter } from 'react-router';
import Field from './_field'
import { connect } from 'react-redux';
import { login, logout, signup } from '../actions/session_actions';



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
			<div className="row">
        <div className="input-field col s6">
					<input type='password'
					value={this.state.passwordCheck}
					onChange={this.update('passwordCheck')}
					className="validate"
 					/>
          <label for="passwordCheck">Retype Password</label>
        </div>
      </div>
		}

		return (
			<div className="row">
				<form onSubmit={this.handleSubmit} className="input-field col s6">
					Welcome to Roost!
					<br/>
					Please {this.props.formType} or {this.navLink()}
					{this.renderErrors()}

					<div className="row">
						<div className="input-field col s6">
							<input type='text'
							value={this.state.username}
							onChange={this.update('username')}
							className="validate" />
							<label for='username'> Username:
							</label>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<input type='password'
							value={this.state.password}
							onChange={this.update('password')}
							className="validate"
 							/>
							<label for='password'> Password:
							</label>
						</div>
					</div>

					{ signUpOptions }
					<input type="submit" value="Submit" className="btn waves-effect waves-light" />
				</form>
			</div>
		);
	}

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SessionForm));

// export default withRouter(SessionForm);
