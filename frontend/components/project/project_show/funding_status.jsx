import React from "react";
import ProgressBar from './../home_page/progress_bar';

const FundingStatus = (props) => {
  const goal = props.basicInfo.goal

  const funding = props.contributionsInfo.total_contributions || 0;
  debugger
  return (
    <div className="funding-status-container">
      <ProgressBar goal={goal} funding={funding} />
    </div>
  )
}

export default FundingStatus;
