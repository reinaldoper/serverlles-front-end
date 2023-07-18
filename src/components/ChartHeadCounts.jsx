import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

const  ChartHeadCounts = ({ turnover }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = () => {
        const labels = turnover.map((monthData) => monthData.total);
        const headcountData = turnover.map((monthData) => monthData.headMesAmes);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'HeadCount',
              data: headcountData,
              fill: false,
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1,
            },
          ],
        });
    };

    fetchChartData();
  }, [turnover]);
  return (
    <div>
      <h1>HeadCount</h1>
      <Line data={chartData} />
    </div>
  )
}

ChartHeadCounts.propTypes = {
  turnover: PropTypes.array.isRequired,
};

export default ChartHeadCounts;