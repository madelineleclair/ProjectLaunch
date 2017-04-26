import React from 'react';

const ProgressBar = (props) => {

  const percentage = (props.funding / props.goal) * 100;
    debugger
  return (
    <div className="progress-bar">
      <div className="percentage-pledged" style={{width: `${percentage}%`}} />
    </div>
  );
};

export default ProgressBar;
