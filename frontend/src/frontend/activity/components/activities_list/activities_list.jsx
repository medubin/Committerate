import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchActivities  } from '../../actions/activity_actions'
import {SORTS, sortActivities} from '../../actions/activity_sort_actions'
import Activity from './activity'
import ActivitiesSort from './activities_sort'
import ActivityCloseup from './activity_closeup'
import '../../scss/activity_list.css';

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
    this.renderCloseup = this.renderCloseup.bind(this)
    this.openCloseup = this.openCloseup.bind(this)
    this.closeCloseup = this.closeCloseup.bind(this)
    this.state = {
      selected: null
    }
  }

  renderActivities() {
    let activities = []
    for(let key in this.props.activities) {
      activities.push(
        <Activity activity={this.props.activities[key]} key={key} openCloseup={(e) => this.openCloseup(e, key)}/>
      )
    }
    return activities
  }

  openCloseup(e, selected) {
    e.preventDefault();
    this.setState({
      selected: selected
    })
  }

  closeCloseup() {
    this.setState({
      selected: null
    })
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

  renderCloseup() {
    let selected = this.state.selected
    if (selected && this.props.activities[selected]) {
      return <ActivityCloseup activity={this.props.activities[selected]} closeCloseup={() => this.closeCloseup()} />
    }
  }



  render() {
    return (
      <div className="activity-list">
      <ActivitiesSort />
        {this.renderActivities()}
        {this.renderCloseup()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ActivitiesList));
