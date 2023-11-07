import React from 'react';
import './About.css';
import ExpandableMenuItem from '../components/StudentZone_MenuBar.jsx';

const items = Array(10).fill().map((_, index) => ({
  title: `Menu ${index + 1}`,
  paragraph: `Description for Menu ${index + 1}.`,
}));

function App() {
  return (
    <div className="App">
      {items.map((item, index) => (
        <ExpandableMenuItem key={index} {...item} />
      ))}
    </div>
  );
}

export default App;
