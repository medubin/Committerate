import React from 'react'
import { Router,  hashHistory } from 'react-router'
import { connect } from 'react-redux'

const mapStateToProps = ({ session }) => ({
  username: session.currentUser.username
});

const mapDispatchToProps = dispatch => ({

});

class Landing extends React.Component {

    render() {
      return <div className="landingPage">
        Welcome to Committerate! {this.props.username}
      </div>
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
