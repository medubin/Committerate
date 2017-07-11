import React from 'react';
import { connect } from 'react-redux';
import '../../scss/activity_closeup.scss';
import { logActivity } from '../../actions/activity_actions'

const mapStateToProps = ({}) => ({
});

const mapDispatchToProps = (dispatch) => ({
  logActivity: activity => dispatch(logActivity(activity))
});

class ActivityCloseup extends React.Component {

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
      e.preventDefault();
      this.props.logActivity(this.props.activity)
    }

  render() {
    let activityType = 'activity-' + (this.props.activity.value > 0 ? 'good' : 'bad')

    let name = this.props.activity.name
    name = name.length < 60 ? name : name.substr(0, 57) + '...'

    let description = this.props.activity.description
    description = description.length < 200 ? description : description.substr(0, 197) + '...'

    return (
      <div className='background-closeup' onClick={this.props.closeCloseup}>
        <a href='#' className='closeup' onClick={this.handleClick}>
          <div className='closeup-name'>
            {name}
          </div>

          <div className='closeup-description'>
            {description}
          </div>

          <div className='closeup-value'>
            {this.props.activity.value}
          </div>
        </a>
      </div>
      )
    }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityCloseup);
