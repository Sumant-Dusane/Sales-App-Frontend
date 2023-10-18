import React from 'react';
import "./dashboard.scss";
import Sidebar from '../Sidebar/Sidebar'
import Barchart from '../BarChart/Barchart';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard__content">
        <div className="dashboard__content__header">
          <div>
            <div className="h2"><strong>Dashboard 💰</strong></div>
            <span>Morning Sumant, Welcome to AvaLaunch Dashboard</span>
          </div>
          <input type="text" name="" id="" placeholder='Search Here' />
        </div>
        <div className="dashboard__content__main">
          <div className='card total-sales'>
            <div className="icon"><i class="fas fa-shopping-bag" /></div>
            <span>Total Sales</span>
            <div className="h2">₹362,929</div>
            <span>Over Last Month ₹123,909</span>
          </div>
          <div className='card total-expense'>
            <div className="icon"><i class="fas fa-chart-pie" /></div>
            <span>Total Expense</span>
            <div className="h2">₹123,772</div>
            <span>Over Last Month ₹95,123</span>
          </div>
          <div className='chart'>
            <div className="h1">Sales Report </div>
            <Barchart />
          </div>  
        </div>
      </div>
    </div>
  )
}
