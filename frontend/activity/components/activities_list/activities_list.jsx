import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchActivities } from '../../actions/activity_actions'

const mapStateToProps = ({activities}) => ({
  activities: activities.activities
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: activities => dispatch(fetchActivities(activities))
});

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchActivities()
    this.renderActivities = this.renderActivities.bind(this)
  }

  renderActivities() {
    let activities = []
    for(let key in this.props.activities) {
      activities.push(
        <div className='activity-list-item' key={key}>
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
