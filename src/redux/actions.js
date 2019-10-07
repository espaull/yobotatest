import { UPDATE_ORDER, UPDATE_STARTINDEX, UPDATE_AMOUNT } from './actionTypes';

export const updateOrder = orderType => ({
  type: UPDATE_ORDER,
  payload: {
    orderType,
  },
});

export const updateStartIndex = newIndex => ({
  type: UPDATE_STARTINDEX,
  payload: {
    newIndex,
  },
});

export const updateAmountPerPage = amount => ({
  type: UPDATE_AMOUNT,
  payload: {
    amount,
  },
});
