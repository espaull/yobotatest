import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateStartIndex, updateAmountPerPage } from '../../redux/actions';
import {
  getPeopleTableStartIndex,
  getPeopleTableAmountPerPage,
  getPeopleTableCollection,
} from '../../redux/selectors';
import { init } from '../../services/sort';

import Header from './Header';
import Body from './Body';

const Container = ({
  amountPerPage,
  collection,
  startIndex,
  updateStartIndex,
  updateAmountPerPage,
}) => {
  const getMockData = async () => {
    try {
      const response = await fetch('data/data.json');
      const data = await response.json();

      init(data);
      updateStartIndex(0);
    } catch (err) {
      console.log(err);
    }
  };

  const showNext = () => {
    updateStartIndex(startIndex + amountPerPage);
  };

  const showPrev = () => {
    if (startIndex > 0) updateStartIndex(startIndex - amountPerPage);
  };

  const changeAmount = event => {
    updateAmountPerPage(parseInt(event.target.value));
  };

  useEffect(() => {
    getMockData();
  }, []);

  return (
    <>
      <PeopleTable>
        <Header />
        {collection.length > 0 && <Body people={collection} />}
      </PeopleTable>
      <button onClick={showPrev}>Prev</button>
      <button onClick={showNext}>Next</button>
      <label>
        Per page
        <select value={amountPerPage} onChange={changeAmount}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </label>
    </>
  );
};

const PeopleTable = styled.table`
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
  width: 100%;
`;

export default connect(
  state => ({
    startIndex: getPeopleTableStartIndex(state),
    amountPerPage: getPeopleTableAmountPerPage(state),
    collection: getPeopleTableCollection(state),
  }),
  { updateStartIndex, updateAmountPerPage }
)(Container);
