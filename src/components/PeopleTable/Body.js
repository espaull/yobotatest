import React from 'react';

import Row from './Row';

const Body = ({ people }) => {
  console.log('Rerendering');
  return (
    <tbody>
      {people.map(person => (
        <Row key={person.id} person={person} />
      ))}
    </tbody>
  );
};

export default Body;
