import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchActivities  } from '../../actions/activity_actions'
import {SORTS, sortActivities} from '../../actions/activity_sort_actions'
import Activity from './activity'
import '../../scss/activity_list_sort.scss';



const mapStateToProps = ({activities}) => ({
  //smell I shouldn't have to access activites here. Better if I didn't need to pass activites into the sort
  // Although that does allow the sort to be more generic
  activities: activities.activities,
});

const mapDispatchToProps = (dispatch) => ({
  sortActivities: (activites, sortKey, order) => dispatch(sortActivities(activites, sortKey, order))

});

class ActivitiesSort extends React.Component {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this)
    this.state = {
      sort: '',
      order: 'desc'

    }
  }

  sort(sortName) {
    let order = this.state.order
    if (this.state.sort === sortName) {
      order = order === 'asc' ? 'desc' : 'asc'
    }

    this.props.sortActivities(this.props.activities, sortName, order)
    this.setState({
      sort: sortName,
      order: order
    })
  }

  renderSorts() {
    let sorts = []
    for (let sortName in SORTS) {
      let highlighted = this.state.sort === SORTS[sortName] ? ' highlighted' : ''

      sorts.push(
        <div key={sortName} className={'activity-list-sort-option' + highlighted} onClick={() => this.sort(SORTS[sortName])}>
          {sortName}
        </div>
      )
    }
    return sorts
  }

  render() {
    return (
      <div className='activity-list-sort'>
        {this.renderSorts()}
      </div>
    )

  }
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ActivitiesSort);
