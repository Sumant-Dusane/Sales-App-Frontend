import React from 'react';
import "./sidebar.scss";
import Piechart from '../PieChart/Piechart';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__content">
      <div className="sidebar__content__username">
        <img src="https://media.licdn.com/dms/image/D4D03AQGyiS8RY1CokA/profile-displayphoto-shrink_400_400/0/1692034196520?e=1703116800&v=beta&t=nnHk5wFlfM1x5yx4x34RI1ngA9K_xoiNnT0NyqJV6UQ" alt="Sumant  Dusane" />
        <h2>Sumant</h2>
      </div>
      <ul className='sidebar__content__menu'>
        <span>Main Menu</span>
        <li><button className='btn active'><i class="fas fa-th-large" /> Dashboard</button></li>
        <li><button className='btn'><i class="fas fa-chart-bar" /> Analytics</button></li>
        <li><button className='btn'><i class="far fa-calendar-alt" /> Schedule</button></li>
        <li><button className='btn'><i class="fas fa-user-friends" /> Customer</button></li>
        <li><button className='btn'><i class="far fa-sticky-note" /> Spreadsheet</button></li>
      </ul>
      </div>
      <Piechart />
    </div>
  )
}
