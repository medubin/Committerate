import React from 'react'
import { Router,  hashHistory, withRouter } from 'react-router'
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
      return <div className="landing-page">
        <h1 className='landing-page-score'>
            {this.props.score}
        </h1>
      </div>
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Landing));
