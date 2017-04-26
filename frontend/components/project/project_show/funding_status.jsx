import React from "react";
import ProgressBar from './../home_page/progress_bar';
import moment from 'moment';

const FundingStatus = (props) => {
  const basicInfo = props.basicInfo;
  const goal = basicInfo.goal;
  const funding = props.contributionsInfo.total_contributions || 0;
  const total_contributers = props.contributionsInfo.total_contributers;

  const remainingTime = moment(basicInfo.launch_date).add(basicInfo.duration, 'days').fromNow(true);
  const backers = total_contributers === 1 ? "backer" : "backers";
  return (
    <div className="funding-status-container">
      <ProgressBar goal={goal} funding={funding} />
      <div className="funding-raised">
        <h2>${funding}</h2>
        <h4>pledged of ${goal} goal</h4>
      </div>
      <div className="backers">
        <h2>{total_contributers}</h2>
        <h4>{backers}</h4>
      </div>
      <div className="remaining-time">
        <h2>{remainingTime}</h2>
        <h4>left to go</h4>
      </div>
    </div>
  );
};

export default FundingStatus;
