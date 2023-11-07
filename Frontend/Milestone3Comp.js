import React from 'react';
import PublicWorksContainer from './Milestone3/PublicWorksContainer';
import TableContainer from './Milestone3/TableContainer'
import Sidebar from './Milestone3/Sidebar';
import MainContent from './Milestone3/MainContent';
import SearchBar from './Milestone3/SearchBar';


class AllComponents extends React.Component {
  render() {
    return (
      <div>
        <TableContainer />
        <PublicWorksContainer />
        <Sidebar />
        <NavList />
        <MainContent />
        <SearchBar />
      </div>
    );
  }
}

export default Milestone3Comp;