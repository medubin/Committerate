import React from 'react';
import '../../scss/activity_closeup.scss';

class ActivityCloseup extends React.Component {


  render() {
    let activityType = 'activity-' + (this.props.activity.value > 0 ? 'good' : 'bad')

    let name = this.props.activity.name
    name = name.length < 60 ? name : name.substr(0, 57) + '...'

    let description = this.props.activity.description
    description = description.length < 200 ? description : description.substr(0, 197) + '...'

    return (
      <div className='background-closeup' onClick={this.props.closeCloseup}>
        <a href='#' className='closeup'>
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


export default ActivityCloseup;
