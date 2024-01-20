import React from 'react';
import faker from 'faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateLast30DaysLabels = () => {
  const labels = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    labels.push(`${month} ${day}`);
  }

  return labels;
};

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Last 30 days report',
    },
  },
};

const labels = generateLast30DaysLabels();

export const data = {
  labels,
  datasets: [
    {
      label: 'product items',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const ChartMap = () => {
  return <Line options={options} data={data} />;
};

export default ChartMap;
