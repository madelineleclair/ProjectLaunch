import { RECEIVE_PENDING_AMOUNT, RECEIVE_PENDING_REWARD, CLEAR_PENDING_TRANSACTIONS } from '../actions/pending_transaction_actions';

const _defaultState = {
  amount: 0,
  reward: null
};

const PendingTransactionsReducer = (state = _defaultState, action) => {

  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_PENDING_REWARD): {
      const newState = Object.assign({}, state);
      newState.reward = action.rewardId
      return newState;
    }

    case(RECEIVE_PENDING_AMOUNT): {

      const newState = Object.assign({}, state);
      newState.amount += action.amount;
      return newState;
    }

    case(CLEAR_PENDING_TRANSACTIONS): {
      return _defaultState;
    }
    default:
      return state;
  }
};

export default PendingTransactionsReducer;
