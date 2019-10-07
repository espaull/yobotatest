import { UPDATE_ORDER, UPDATE_STARTINDEX, UPDATE_AMOUNT } from '../actionTypes';
import { sliceData, sortData } from '../../services/sort';
import sortingFunctions from '../../services/sortingFunctions';

const initialState = {
  orderBy: {},
  startIndex: 0,
  activeOrder: '',
  amountPerPage: 10,
  collection: {},
};

const peopleTable = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ORDER: {
      const { orderType } = action.payload;
      const direction = !state.orderBy[orderType];
      const newCollection = sortData(
        state.collection,
        sortingFunctions[orderType][direction]
      );

      return {
        ...state,
        activeOrder: orderType,
        orderBy: {
          ...state.orderBy,
          [orderType]: direction,
        },
        collection: newCollection,
      };
    }
    case UPDATE_STARTINDEX: {
      const { newIndex } = action.payload;

      return {
        ...state,
        startIndex: newIndex,
        collection: sliceData(newIndex, newIndex + state.amountPerPage),
      };
    }
    case UPDATE_AMOUNT: {
      const { amount } = action.payload;

      return {
        ...state,
        amountPerPage: amount,
        collection: sliceData(state.startIndex, state.startIndex + amount),
      };
    }
    default:
      return state;
  }
};

export default peopleTable;
