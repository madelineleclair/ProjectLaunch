import React from 'react';

const RewardInfo = (props) => {
  return (
    <li className="current-rewards">
        <section className="reward-number">
          <label>Reward #{props.number + 1}</label>
        </section>
        <section className="current-reward-info">
          <h3>Pledge ${props.reward.pledge_amount} or more</h3>
          <h4>{props.reward.title}</h4>
          <p>{props.reward.description}</p>
          <p>ESTIMATED DELIVERY</p>
          <h5>{props.reward.delivery_date}</h5>
        </section>
    </li>
  );
};

export default RewardInfo;
