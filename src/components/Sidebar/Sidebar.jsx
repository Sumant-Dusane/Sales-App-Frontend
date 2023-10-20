import React, { useState } from "react";
import "./sidebar.scss";
import Piechart from "../PieChart/Piechart";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [sidebarVisible, setsidebarVisibility] = useState(false);
  return (
    <>
      <button
        className="btn btn-open"
        onClick={() => setsidebarVisibility(true)}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className={sidebarVisible ? "sidebar show" : "sidebar"}>
        <button
          className="btn btn-close"
          onClick={() => setsidebarVisibility(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="sidebar__content">
          <div className="sidebar__content__username">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQGyiS8RY1CokA/profile-displayphoto-shrink_400_400/0/1692034196520?e=1703116800&v=beta&t=nnHk5wFlfM1x5yx4x34RI1ngA9K_xoiNnT0NyqJV6UQ"
              alt="Sumant  Dusane"
            />
            <h2>Sumant</h2>
          </div>
          <ul className="sidebar__content__menu">
            <span>Main Menu</span>
            <li>
              <button className="btn active">
                <i class="fas fa-th-large" /> Dashboard
              </button>
            </li>
            <li>
              <Link to="/analytics">
                <button className="btn">
                  <i class="fas fa-chart-bar" /> Analytics
                </button>
              </Link>
            </li>
            <li>
              <button className="btn">
                <i class="far fa-calendar-alt" /> Schedule
              </button>
            </li>
            <li>
              <button className="btn">
                <i class="fas fa-user-friends" /> Customer
              </button>
            </li>
            <li>
              <button className="btn">
                <i class="far fa-sticky-note" /> Spreadsheet
              </button>
            </li>
          </ul>
        </div>
        <div className="sidebar__chart">
          <Piechart />
        </div>
      </div>
    </>
  );
}
