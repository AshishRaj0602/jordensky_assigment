import React from 'react';
import data from './data';
import './table.css'
import ExpandableList from "./ExpandableList.jsx";
const AccountTable = () => {
  const renderNestedList = (data) => {
    return Object.keys(data)?.map((key) => {
      const item = data[key];
      return (
          
        <ExpandableList key={key} title={item.account_name}>
            <td>{item.previous}</td>
            <td>{item.current}</td>
            {item.children && (
              <td>
                {item?.children_total_current}
              </td>
            )}
            {item?.children && (
              <td>
                {item?.children_total_previous}
              </td>
            )}
            {item?.children && renderNestedList(item?.children)}
        </ExpandableList>
         
      );
    });
  };
  

  return (
    <div>
      <h1>Table List</h1>
      <table>
        <tr>
        <th>ACCOUNT</th>
        <th>PREVIOUS TOTAL</th>
        <th>TOTAL</th>
        <th>CHILDREN PREVIOUS TOTAL</th>
        <th>CHILDREN TOTAL</th>
        </tr>
        {renderNestedList(data)}
      </table>
    </div>
  );
}

export default AccountTable
