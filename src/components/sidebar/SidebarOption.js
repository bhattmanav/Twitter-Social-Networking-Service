import React from "react";
import "./SidebarOption.css";
function SidebarOption({ active, text, Icon }) {
  return (
    // <div className={`'sidebarOption' ${active} && 'sidebarOption--active' `}>
    // <div className={`${active} ? "sidebarOption--active" : "sidebarOption"`}>
    // <div className={`${active ? "siderbarOption--active" : "sidebarOption"}`}>
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon className="sidebarOption__icon" />
      <h2 className="sidebarOption__text">{text}</h2>
    </div>
  );
}

export default SidebarOption;
