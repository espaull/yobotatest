import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateOrder } from '../../redux/actions';
import sortingFunctions from '../../services/sortingFunctions';

const Header = ({ updateOrder }) => {
  const sortables = Object.keys(sortingFunctions);

  const headings = [
    'First Name',
    'Last Name',
    'DOB',
    'Email',
    'Industry',
    'Salary',
    'Experience',
  ];

  const handleClick = type => {
    if (sortables.includes(type)) updateOrder(type);
  };

  return (
    <TableHead>
      <tr>
        {headings.map(heading => (
          <TableHeading key={heading} onClick={() => handleClick(heading)}>
            {heading}
          </TableHeading>
        ))}
      </tr>
    </TableHead>
  );
};

const TableHead = styled.thead`
  background-color: #3f87a6;
  color: #fff;
`;

const TableHeading = styled.th`
  border: 1px solid rgb(190, 190, 190);
  padding: 5px 10px;
`;

export default connect(
  null,
  { updateOrder }
)(Header);
