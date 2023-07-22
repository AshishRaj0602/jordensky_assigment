import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './Chart.css';
import { Link } from 'react-router-dom';
const monthlyData = {
    title: 'Monthly Sales Performance',
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: [ 15000,
      8000,
      4500,
      11000,
      2000,
      9500
  ],
  };
  
  const quarterlyData = {
    title: 'Sales Performance',
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    data: [15000,
      8000,
      4500,
      11000
  ],
  };
  
const Chart = () => {
    const [selectedTab, setSelectedTab] = useState('both');
  
    const handleTabChange = (tab) => {
      setSelectedTab(tab);
    };
  
    return (
      <>
      <div className="app-container">
        <div className="tab-container">
          <button className={selectedTab === 'monthly' ? 'active' : ''} onClick={() => handleTabChange('monthly')}>
            Monthly
          </button>
          <button className={selectedTab === 'quarterly' ? 'active' : ''} onClick={() => handleTabChange('quarterly')}>
            Quarterly
          </button>
          <button className={selectedTab === 'both' ? 'active' : ''} onClick={() => handleTabChange('both')}>
            Both
          </button>
        </div>
        <div>
          {(selectedTab === 'monthly' || selectedTab === 'both') && (
            <div>
              <h2 className="chart-heading">{monthlyData.title}</h2>
              <div className="chart-container">
                <Line
                  data={{
                    labels: monthlyData.labels,
                    datasets: [
                      {
                        label: 'Monthly Sales',
                        data: monthlyData.data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          )}
          {(selectedTab === 'quarterly' || selectedTab === 'both') && (
            <div>
              <h2 className="chart-heading">{quarterlyData.title}</h2>
              <div className="chart-container">
                <Bar
                  data={{
                    labels: quarterlyData.labels,
                    datasets: [
                      {
                        label: 'Quarterly Sales',
                        data: quarterlyData.data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="button-container">
        <Link to="/" className="button">
          Back To Home
        </Link>
      </div>
      </>
    );
  };

export default Chart
