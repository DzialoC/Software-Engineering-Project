import React from 'react';

function List({ data, horizontal }) {
  return (
    <ul className={`list ${horizontal ? 'horizontal' : 'vertical'}`}>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;