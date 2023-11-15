// ResponsiveTable.jsx

import React from "react";
import { useTable } from "react-table";

const ResponsiveTable = ({ data }) => {
  // Define columns for react-table
  const columns = React.useMemo(
    () => [
      { Header: "Column 1", accessor: "col1" }, // Replace with your actual data fields
      { Header: "Column 2", accessor: "col2" },
      // Add as many columns as needed
    ],
    []
  );

  // Use the useTable hook to create your table configuration
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // Render the UI for your table
  return (
    <table {...getTableProps()} className="responsive-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResponsiveTable;
