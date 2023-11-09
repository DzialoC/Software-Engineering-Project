import React, { Component } from 'react';

class VehicleList extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [
        { name: 'Vehicle A', status: 'Active' },
        { name: 'Vehicle B', status: 'Inactive' },
        { name: 'Vehicle C', status: 'Active' },
        // Add more vehicles as needed
      ],
      filterStatus: 'All',
      searchQuery: '',
    };
  }

  handleStatusFilterChange = (event) => {
    this.setState({ filterStatus: event.target.value });
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { vehicles, filterStatus, searchQuery } = this.state;

    // Filter vehicles based on selected status and search query
    const filteredVehicles = vehicles.filter(
      (vehicle) =>
        (filterStatus === 'All' || vehicle.status === filterStatus) &&
        (searchQuery === '' ||
          vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
      <div>
        <h2>Vehicle List</h2>
        <div>
          <label>Status Filter:</label>
          <select value={filterStatus} onChange={this.handleStatusFilterChange}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label>Search:</label>
          <input type="text" value={searchQuery} onChange={this.handleSearch} />
        </div>
        <ul>
          {filteredVehicles.map((vehicle, index) => (
            <li key={index}>
              {vehicle.name} - Status: {vehicle.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default VehicleList;