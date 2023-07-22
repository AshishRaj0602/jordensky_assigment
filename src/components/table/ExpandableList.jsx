import React, { useState } from "react";
import "./ExpandableList.css"; // Import the CSS file for the component

const ExpandableList = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <tr className="expandable-list">
      <td onClick={toggleExpand} className="list-title">
        {expanded ? "-" : "+"} {title}
      </td>
      {expanded && <>{children[0]}</>}
      {expanded && <>{children[1]}</>}
      {expanded && <>{children[2]}</>}
      {expanded && <>{children[3]}</>}
    </tr>
      {expanded && <>{children[4]}</>}
   
    </>
  );
};

export default ExpandableList;
