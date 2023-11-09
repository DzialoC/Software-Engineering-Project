import React from 'react';

// Sample data
const tableData = [
  { item: 'Item 1', data: [10, 15, 20, 25, 30] },
  { item: 'Item 2', data: [5, 10, 15, 20, 25] },
  // Add more data as needed
];

// TableDataCell component
const TableDataCell = ({ value }) => (
  <td>{value}</td>
);

// TableRow component
const TableRow = ({ item, data }) => (
  <tr>
    <td>{item}</td>
    {data.map((value, index) => (
      <TableDataCell key={index} value={value} />
    ))}
  </tr>
);

// TableHeader component
const TableHeader = ({ months }) => (
  <thead>
    <tr>
      <th>Incidents for 2021/2022</th>
      {months.map((month, index) => (
        <th key={index}>{month}</th>
      ))}
    </tr>
  </thead>
);

// TableContainer component
const TableContainer = () => {
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug']; // Add more months as needed

  return (
    <table>
      <TableHeader months={months} />
      <tbody>
        {tableData.map((rowData, index) => (
          <TableRow key={index} item={rowData.item} data={rowData.data} />
        ))}
      </tbody>
    </table>
  );
};

export default TableContainer;
