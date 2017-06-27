import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchActivities, logActivity  } from '../../actions/activity_actions'

const mapStateToProps = ({activities}) => ({
  activities: activities.activities
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: activities => dispatch(fetchActivities(activities)),
  logActivity: activity => dispatch(logActivity(activity))
});

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchActivities()
    this.renderActivities = this.renderActivities.bind(this)
  }


  handleClick(e, key) {
    e.preventDefault();
    this.props.logActivity(this.props.activities[key])

  }

  renderActivities() {
    let activities = []
    for(let key in this.props.activities) {
      let activityType = 'activity-' + (this.props.activities[key].value > 0 ? 'good' : 'bad')
      activities.push(
        <div className={'activity-list-item ' + activityType}  key={key} onClick={ (e) => this.handleClick(e, key) }>
            {this.props.activities[key].name}
        </div>
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
)(ActivityList);
