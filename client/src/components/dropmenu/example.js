import React from 'react';
import DropMenu from './DropMenu';

const App = () => {
  const menuItems = [
    { label: 'Profile', href: '/profile' },
    { label: 'Settings', href: '/settings' },
    { label: 'Logout', href: '/logout' }
  ];

  return (
    <div>
      <DropMenu buttonLabel="Menu" menuItems={menuItems} />
    </div>
  );
};

export default App;
