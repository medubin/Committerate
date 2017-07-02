import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import {logActivity  } from '../../actions/activity_actions'

const mapStateToProps = ({}) => ({
});

const mapDispatchToProps = (dispatch) => ({
  logActivity: activity => dispatch(logActivity(activity))
});

class Activity extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logActivity(this.props.activity)
  }

  render() {
    let activityType = 'activity-' + (this.props.activity.value > 0 ? 'good' : 'bad')

    return (
      <a href='#' className={'activity-list-item ' + activityType} onClick={ (e) => this.handleClick(e) }>
          {this.props.activity.name}
      </a>
    )
  }



}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
