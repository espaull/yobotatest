export const getPeopleTableState = store => store.peopleTable;

export const getPeopleTableStartIndex = store =>
  getPeopleTableState(store) ? getPeopleTableState(store).startIndex : 0;

export const getPeopleTableActiveOrder = store =>
  getPeopleTableState(store) ? getPeopleTableState(store).activeOrder : '';

export const getPeopleTableOrderDirection = store => {
  const active = getPeopleTableActiveOrder(store);

  return getPeopleTableState(store).orderBy[active];
};

export const getPeopleTableAmountPerPage = store =>
  getPeopleTableState(store) ? getPeopleTableState(store).amountPerPage : 10;

export const getPeopleTableCollection = store =>
  getPeopleTableState(store) ? getPeopleTableState(store).collection : {};
