import React from 'react';

function Table({ data }) {
  const renderTableHeader = () => {
    if (data.length === 0) return null;

    const header = Object.keys(data[0]);
    return header.map((key, index) => (
      <th key={index}>{key.toUpperCase()}</th>
    ));
  };

  const renderTableRows = () => {
    return data.map((item, index) => (
      <tr key={index}>
        {Object.values(item).map((value, idx) => (
          <td key={idx}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>{renderTableHeader()}</tr>
      </thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
}

export default Table;