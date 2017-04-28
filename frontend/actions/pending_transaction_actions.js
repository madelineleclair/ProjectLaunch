export const RECEIVE_PENDING_PAYMENT  = "RECEIVE_PENDIN_PAYMENT";
export const RECEIVE_PENDING_REWARD = "RECEIVE_PENDING_REWARDS";

export const receivePendingPayment = (amount) => {
  return {
    type: RECEIVE_PENDING_PAYMENT,
    amount
  };
};

export const reviewPendingReward = (rewardId) => {
  return {
    type: RECEIVE_PENDING_REWARD,
    rewardId
  };
};
