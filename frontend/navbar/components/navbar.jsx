import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../session/actions/session_actions';
import {fetchActivityStats} from '../../activity/actions/activity_stats_actions'

const mapStateToProps = ({ session, activityStats }) => ({
  currentUser: session.currentUser,
  score: activityStats.score
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchActivityStats: activityStats => dispatch(fetchActivityStats(activityStats))
});


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.currentUser && nextProps.currentUser) {
      this.props.fetchActivityStats()
    }
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
              <li><Link to="/">{this.props.score}</Link></li>
              <li><Link to="/activity/">Log Activity</Link></li>
              <li><Link to="/activity/new/">New Activity</Link></li>
              <li><Link to="/login" onClick={this.logout}>Logout</Link></li>
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
