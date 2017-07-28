import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { login, logout, signup } from '../actions/session_actions';
import Form from '../../app/components/form'

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


class SessionForm extends Form {
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

  generateFields() {
    let fields = [
      {name: 'Username', description: 'Username', type: 'text', state: 'username'},
      {name: 'Password', description: 'Password', type: 'password', state: 'password'}
    ]
    if (this.props.formType === 'signup') {
      fields.push({name: 'Password', description: 'Retype password', type: 'password', state: 'passwordCheck'})
    }
    return fields
  }

	render() {
		return (
			<div className="form-container">
        Welcome to Commiter!
        <br/>
        Please {this.props.formType} or {this.navLink()}
        {this.renderForm()}
			</div>
		);
	}

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SessionForm));
