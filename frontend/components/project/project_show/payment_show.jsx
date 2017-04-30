import React from 'react';
import moment from 'moment';

const TransactionInfo = (props) => {
  const deliveryDate =  moment(props.reward.delivery_date).format('MM-YYYY');
  return (
    <div className="payment-info-container">
      <div className="payment-amount">
        <h5>PLEDGE AMOUNT</h5>
        <h3>${props.amount}</h3>
      </div>
      <div className="payment-info-reward">
        <h5>SELECTED REWARD</h5>
        <h3>{props.reward.title}</h3>
        <p>{props.reward.description}</p>
        <p>Estimated delivery {deliveryDate}</p>
      </div>
    </div>
  )
}

export default TransactionInfo;
