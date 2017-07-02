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

    let name = this.props.activity.name
    name = name.length < 30 ? name : name.substr(0, 27) + '...'

    let description = this.props.activity.description
    description = description.length < 100 ? description : description.substr(0, 97) + '...'

    return (
      <a href='#' className={'activity-list-item ' + activityType} onClick={ (e) => this.handleClick(e) }>
        <div className='activity-list-item-name'>
          {name}
        </div>

        <div className='activity-list-item-description'>
          {description}
        </div>

        <div className='activity-list-item-value'>
          {this.props.activity.value}
        </div>



        <span className='activity-list-item-progress'>
          <span className='activity-list-item-progress-bg'>
            <span className='activity-list-item-progress-fg' style={{width: '88%'}}>
            </span>
          </span>

          <span className='activity-list-item-progress-labels' >
            <span className='activity-list-item-progress-label' >
              88%
            </span>
            <span className='activity-list-item-progress-completes' >
              490/500
            </span>
          </span>
        </span>
      </a>
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
