import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchActivities  } from '../../actions/activity_actions'
import {SORTS, sortActivities} from '../../actions/activity_sort_actions'
import Activity from './activity'
import ActivitiesSort from './activities_sort'

const mapStateToProps = ({activities}) => ({
  activities: activities.activities,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: activities => dispatch(fetchActivities(activities)),
  sortActivities: (activites, sortKey, order) => dispatch(sortActivities(activites, sortKey, order))

});

class ActivitiesList extends React.Component {
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

renderSorts() {
  let sorts = []
  for (let sortName in SORTS) {
    sorts.push(
      <div key={sortName} className='activity-list-sort-option' onClick={this.sort}>
        {sortName}
      </div>
    )
  }
  return sorts
}



  render() {

    return (
      <div className="activity-list-container">
      <ActivitiesSort />
        {this.renderActivities()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ActivitiesList));
