import React from 'react';
import styled from 'styled-components';

const Row = ({ person }) => {
  return (
    <TableRow>
      <TableData>{person.first_name}</TableData>
      <TableData>{person.last_name}</TableData>
      <TableData>{person.date_of_birth}</TableData>
      <TableData>{person.email}</TableData>
      <TableData>{person.industry}</TableData>
      {person.salary && <TableData>£{person.salary.toFixed(2)}</TableData>}
      <TableData>{person.years_of_experience}</TableData>
    </TableRow>
  );
};

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #eee;
  }
`;

const TableData = styled.td`
  text-align: center;
  padding: 5px;
`;

export default Row;
