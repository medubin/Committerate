import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../session/actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault()

    this.props.logout()
    window.location.reload()
  }


  render() {
    if(this.props.currentUser) {
      let username = this.props.currentUser.username;
      return (
        <nav className='navbar'>
          <a className='navbar-logo'>Commit</a>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/activity/">Log Activity</Link></li>
              <li><Link to="/activity/new/">New Activity</Link></li>
            </ul>
        </nav>
       )
     } else {
       return (
         <nav className='navbar'>
           <a className='navbar-logo'>Commit</a>
             <ul>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/signup">Sign up!</Link></li>
             </ul>
         </nav>
       )
     }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
