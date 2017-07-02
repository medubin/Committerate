import React from 'react'
import { Router,  hashHistory } from 'react-router'
import { connect } from 'react-redux'
import {fetchActivityStats} from '../activity/actions/activity_stats_actions'

const mapStateToProps = ({ activityStats }) => ({
  score: activityStats.score
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivityStats: activityStats => dispatch(fetchActivityStats(activityStats))

});

class Landing extends React.Component {
  constructor(props) {
    super(props);
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
