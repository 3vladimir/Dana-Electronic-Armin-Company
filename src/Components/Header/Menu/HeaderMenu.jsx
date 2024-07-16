/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./HeaderMenu.scss";

export function Menu({ listItems = [] }) {
  return (
    <>
      <div className="navDashboardOuterContainer">
        <div className="navDashboardInnerContainer">
          <ul className="navDashboardList">
            {[...listItems].map((text,index) => (
              <li className="navDashbordlistItems">{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
