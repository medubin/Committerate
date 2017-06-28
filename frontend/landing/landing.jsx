import React from 'react'
import { Router,  hashHistory } from 'react-router'
import { connect } from 'react-redux'
import {fetchActivityStats} from '../activity/actions/activity_stats_actions'

const mapStateToProps = ({ session, activityStats }) => ({
  username: session.currentUser.username,
  score: activityStats.score
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivityStats: activityStats => dispatch(fetchActivityStats(activityStats))

});

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchActivityStats()
  }



    render() {
      return <div className="landingPage">
        <button className='activity-button'>
            {this.props.score}
        </button>
      </div>
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
