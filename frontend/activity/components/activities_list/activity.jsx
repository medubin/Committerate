import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logActivity } from '../../actions/activity_actions'
import ActivityProgress from './activity_progress'
import '../../scss/activity.scss';

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
      <a href='#' className={'activity-list-item ' + activityType} onClick={ this.props.openCloseup }>
        <div className='activity-list-item-name'>
          {name}
        </div>

        <div className='activity-list-item-description'>
          {description}
        </div>

        <div className='activity-list-item-value'>
          {this.props.activity.value}
        </div>
      </a>
    )
    //<ActivityProgress />
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
