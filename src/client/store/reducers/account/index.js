import {
  ADD_ACCOUNT, CLAIM_PURCHASE,
  DELETE_ACCOUNT,
  GET_ACCOUNTS,
  GET_TRANSACTIONS,
} from '../../actions';
  
  const initialState = {
    accounts: [],
    transactions: [],
    transactionsToClaim: [],
    totalPoints:0,
    transactionsClaimed: [],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_ACCOUNT:
        return {
          ...state,
          accounts: [action.payload, ...state.accounts],
        };
      case DELETE_ACCOUNT:
        return {
          ...state,
          accounts: state.accounts.filter(
            account => account._id !== action.payload
          ),
        };
      case GET_ACCOUNTS:
        return {
          ...state,
          accounts: action.payload,
          
        };
      case GET_TRANSACTIONS:
        return {
          ...state,
          transactions: action.payload.transactions,
          transactionsToClaim: action.payload.transactionsToClaim
        };
      case CLAIM_PURCHASE:
        const newTotalPoints = state.totalPoints + action.payload.amount;
        const newTransactionsToClaim = state.transactionsToClaim.filter(transaction => transaction.transaction_id !== action.payload.transaction_id);
        let newTransactionsClaimed = state.transactionsClaimed;
        newTransactionsClaimed.unshift(action.payload)
        return {
          ...state,
          totalPoints: newTotalPoints,
          transactionsToClaim: newTransactionsToClaim,
          transactionsClaimed: newTransactionsClaimed,
        }
      default:
        return state;
    }
  }