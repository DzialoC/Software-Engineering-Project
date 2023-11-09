import React, { useState, useEffect } from 'react';

const EquipmentList = ({ equipmentData }) => {
  // State for filtering and sorting
  const [filteredData, setFilteredData] = useState(equipmentData);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  // Handle sorting by equipment name
  const handleSort = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Handle searching equipment
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = equipmentData.filter((equipment) =>
      equipment.name.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  // Reset the filter and sorting when equipmentData changes
  useEffect(() => {
    setFilteredData(equipmentData);
    setSortOrder('asc');
    setSearchTerm('');
  }, [equipmentData]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Equipment"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={handleSort}>
                Equipment Name {sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((equipment) => (
            <tr key={equipment.id}>
              <td>{equipment.name}</td>
              <td>{equipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentList;