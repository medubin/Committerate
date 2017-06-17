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


  //   <ul id="user-dropdown" className="dropdown-content">
  //     <li><Link to={'/users/' + username} className="header-item">Profile</Link></li>
  //     <li className="divider"></li>
  //     <li><Link to="/login" className="header-item" onClick={this.logout}>Logout</Link></li>
  //   </ul>


  render() {
    if(this.props.currentUser) {
      let username = this.props.currentUser.username;
      return (
        <nav className='navbar'>
          <a className='navbar-logo'>Commit</a>
            <ul>
              <li><a>test</a></li>
              <li><a>test</a></li>
              <li><a>test</a></li>
            </ul>
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
