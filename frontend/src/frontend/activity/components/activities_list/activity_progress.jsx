import React from 'react';

const ActivityProgress = ({}) => (
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
    )


export default ActivityProgress;
