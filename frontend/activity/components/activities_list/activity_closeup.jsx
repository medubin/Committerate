import React from 'react';

const ActivityCloseup = ({activity, closeCloseup}) => (
  <div className='background-closeup' onClick={closeCloseup}>
    <a href='#' className='closeup'>
      <div className='closeup-name'>
        {activity.name}
      </div>

      <div className='closeup-description'>
        {activity.description}
      </div>

      <div className='closeup-value'>
        {activity.value}
      </div>
    </a>
  </div>
)


export default ActivityCloseup;
