import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchActivities  } from '../../actions/activity_actions'
import Activity from './activity'

const mapStateToProps = ({activities}) => ({
  activities: activities.activities,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: activities => dispatch(fetchActivities(activities)),
});

//TODO the name of this doesn't match the file name :(
class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchActivities()
    this.renderActivities = this.renderActivities.bind(this)
  }

  renderActivities() {
    let activities = []
    for(let key in this.props.activities) {
      let activityType = 'activity-' + (this.props.activities[key].value > 0 ? 'good' : 'bad')
      activities.push(
        <Activity activity={this.props.activities[key]} key={key}/>
      )
  }
  return activities
}

  render() {
    return (
      <div className="activity-list-container">
        {this.renderActivities()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ActivityList));
