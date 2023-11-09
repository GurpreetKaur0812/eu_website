// App.js
import React from 'react';
import ExpandableMenuItem from '../components/expandableMenuBar';
import './About.css';

const menuItems = [
  {
    title: 'Menu 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Menu 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc. At tempor commodo ullamcorper a lacus vestibulum. A erat nam at lectus urna duis. Habitant morbi tristique senectus et netus et malesuada fames. Eget egestas purus viverra accumsan in nisl nisi. Diam in arcu cursus euismod quis. Eget magna fermentum iaculis eu non. ',
  },
  {
    title: 'Menu 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc. At tempor commodo ullamcorper a lacus vestibulum. A erat nam at lectus urna duis. Habitant morbi tristique senectus et netus et malesuada fames. Eget egestas purus viverra accumsan in nisl nisi. Diam in arcu cursus euismod quis. Eget magna fermentum iaculis eu non. ',
  },
  {
    title: 'Menu 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc. At tempor commodo ullamcorper a lacus vestibulum. A erat nam at lectus urna duis. Habitant morbi tristique senectus et netus et malesuada fames. Eget egestas purus viverra accumsan in nisl nisi. Diam in arcu cursus euismod quis. Eget magna fermentum iaculis eu non. ',
  },
  {
    title: 'Menu 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc. At tempor commodo ullamcorper a lacus vestibulum. A erat nam at lectus urna duis. Habitant morbi tristique senectus et netus et malesuada fames. Eget egestas purus viverra accumsan in nisl nisi. Diam in arcu cursus euismod quis. Eget magna fermentum iaculis eu non. ',
  },
  {
    title: 'Menu 6',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc. At tempor commodo ullamcorper a lacus vestibulum. A erat nam at lectus urna duis. Habitant morbi tristique senectus et netus et malesuada fames. Eget egestas purus viverra accumsan in nisl nisi. Diam in arcu cursus euismod quis. Eget magna fermentum iaculis eu non. ',
  },
  {
    title: 'Menu 7',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc. At tempor commodo ullamcorper a lacus vestibulum. A erat nam at lectus urna duis. Habitant morbi tristique senectus et netus et malesuada fames. Eget egestas purus viverra accumsan in nisl nisi. Diam in arcu cursus euismod quis. Eget magna fermentum iaculis eu non. ',
  },
  {
    title: 'Menu 8',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc. At tempor commodo ullamcorper a lacus vestibulum. A erat nam at lectus urna duis. Habitant morbi tristique senectus et netus et malesuada fames. Eget egestas purus viverra accumsan in nisl nisi. Diam in arcu cursus euismod quis. Eget magna fermentum iaculis eu non. ',
  },
];

function App() {
  return (
    <div className="App">
      {menuItems.map((item, index) => (
        <ExpandableMenuItem key={index} {...item} />
      ))}
    </div>
  );
}

export default App;
