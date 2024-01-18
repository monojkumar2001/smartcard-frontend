import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Chart } from 'chart.js/auto';
  
const ChartMap = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Set specific data for two days
    const data = [
      {
        date: '01/10',
        month: 'Jan',
        value: 30,
      },
      {
        date: '01/18',
        month: 'Jan',
        value: 45,
      },
    ];

    // Create a chart
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(entry => `${entry.date} (${entry.month})`),
        datasets: [{
          label: 'Values',
          data: data.map(entry => entry.value),
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        }],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    setChartData(myChart);

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
};

export default ChartMap;
