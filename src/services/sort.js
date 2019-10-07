let peopleData = {};

export const init = data => {
  peopleData = data;
};

export const sortData = (data, sortingFn) => data.slice().sort(sortingFn);
export const sliceData = (start, end) => peopleData.slice(start, end);
