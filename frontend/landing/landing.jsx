import React from 'react'
import { Router,  hashHistory } from 'react-router'
import { connect } from 'react-redux'

const mapStateToProps = ({ session }) => ({
  defaultHomeId: session.currentUser.default_home_id,
  username: session.currentUser.username
});

const mapDispatchToProps = dispatch => ({

});

class Landing extends React.Component {

  componentWillMount() {
    if (this.props.defaultHomeId) {
      hashHistory.push('/homes/' + this.props.defaultHomeId);
    }
  }

    render() {
      return <div className="landingPage">
        Welcome to Roost! {this.props.username}
      </div>
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
