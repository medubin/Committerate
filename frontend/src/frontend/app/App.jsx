import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Navbar from '../navbar/components/navbar';
import './scss/app.css'
import { getCurrentUser } from '../session/actions/session_actions'

const mapStateToProps = ({}) => ({
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: user => dispatch(getCurrentUser(user)),
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getCurrentUser(); // TODO it flashes the login screen. I need to figure that outszz
  }

  render() {
    return (
      <div className='app-container'>
        <header>
          <Navbar />
        </header>
        <div className='body-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
