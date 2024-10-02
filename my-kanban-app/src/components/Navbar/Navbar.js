import React, { useState } from "react";
import "../CssFiles/Navbar.css";

import downIcon from "../../icons/down.svg";
import DisplayIcon from "../../icons/Display.svg";

export default function Navbar(props) {
  const [toggleFilter, setToggleFilter] = useState(false);

  const handleToggle = (e, handler) => {
    setToggleFilter(!toggleFilter);

    // Check if e.target is defined and has a value property
    if (e && e.target && e.target.value !== undefined) {
      handler(e.target.value);
    }
  };

  return (
    <section className={`nav ${props.theme}`}>
      <div className="nav-container">
        <div>
          <div
            className="nav-disp-btn"
            onClick={() => handleToggle(props.handleGroupValue)}
          >
            <div className="nav-disp-icon nav-disp-filter">
              <img
                src={DisplayIcon}
                alt="Display Icon"
                width="22"
                height="22"
              />
            </div>
            <div className="nav-disp-heading">Display</div>
            <div className="nav-disp-icon nav-disp-drop">
              <img src={downIcon} alt="Down Icon" width="22" height="22" />
            </div>
          </div>
          <div
            className={
              toggleFilter
                ? "nav-disp-dropdown nav-disp-dropdown-show"
                : "nav-disp-dropdown"
            }
          >
            <FilterSection
              label="Grouping"
              value={props.groupValue}
              onChange={(e) => handleToggle(e, props.handleGroupValue)}
              options={["status", "user", "priority"]}
            />
            <FilterSection
              label="Ordering"
              value={props.orderValue}
              onChange={(e) => handleToggle(e, props.handleOrderValue)}
              options={["priority", "title"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const FilterSection = ({ label, value, onChange, options }) => (
  <div className="nav-disp-filters">
    <div className="nav-dropdown-category">{label}</div>
    <div className="nav-dropdown-selector">
      <select
        value={value}
        onChange={onChange}
        className="nav-selector"
        name={label.toLowerCase()}
        id=""
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  </div>
);
