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
        <nav>
          <ul id="user-dropdown" className="dropdown-content">
            <li><Link to={'/users/' + username} className="header-item">Profile</Link></li>
            <li className="divider"></li>
            <li><Link to="/login" className="header-item" onClick={this.logout}>Logout</Link></li>
          </ul>

          <div className="nav-wrapper">
            <h2 className="brand-logo">Committerate</h2>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to='/homes/' className="header-item">Homes</Link></li>
              <li><a className="dropdown-button" href="#" data-activates="user-dropdown">{username}</a></li>
            </ul>
  	      </div>
        </nav>
       )
     } else {
       return (
         <nav>
           <div className="nav-wrapper">
             <h2 className="brand-logo">Committerate</h2>
             <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li><Link to="/login"  activeClassName= 'current' className="header-item">Login</Link></li>
               <li><Link to="/signup" activeClassName= 'current' className="header-item">Sign up!</Link></li>
             </ul>
           </div>
         </nav>
       )
     }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
