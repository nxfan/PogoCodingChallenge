import {
  CLAIM_PURCHASE,
} from '../index';

export const claimPurchase = (transaction) => async dispatch => {
   dispatch({
    type: CLAIM_PURCHASE,
    payload: transaction,
  })
}