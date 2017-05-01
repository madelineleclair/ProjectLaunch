export const RECEIVE_PENDING_AMOUNT  = "RECEIVE_PENDING_AMOUNT";
export const RECEIVE_PENDING_REWARD = "RECEIVE_PENDING_REWARDS";
export const CLEAR_PENDING_TRANSACTIONS = "CLEAR_PENDING_TRANSACTIONS";

export const receivePendingPayment = (amount) => {
  return {
    type: RECEIVE_PENDING_AMOUNT,
    amount
  };
};

export const receivePendingReward = (rewardId) => {

  return {
    type: RECEIVE_PENDING_REWARD,
    rewardId
  };
};

export const clearPendingTransactions = () => {
  return {
    type: CLEAR_PENDING_TRANSACTIONS
  };
};
