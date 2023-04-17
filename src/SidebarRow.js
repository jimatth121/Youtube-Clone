import React from "react";
import './SidebarRow.css'

const SidebarRow = ({selected, title, Icon }) => {
  return (
    <div className={`sidebar__row  ${selected &&'selected'} `}>
      <Icon className="sidebarrow__icon"/>
      <h1 className="sidebarrow__title">{title}</h1>
    </div>
  );
};

export default SidebarRow;
