import React, { useState } from 'react';
import '../pages/About.css';

const ExpandableMenuItem = ({ title, paragraph }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-menu-item ${expanded ? 'expanded' : ''}`}>
      <div className="header">
        <span className="title">{title}</span>
        <button className="expand-button" onClick={toggleExpand}>
          {expanded ? '-' : '+'}
        </button>
      </div>
      {expanded && (
        <div className="content">
          <p>{paragraph}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandableMenuItem;

