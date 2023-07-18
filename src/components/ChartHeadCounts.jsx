import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { CunstomDiv } from '../styles/loginForm';
import { CircularProgress } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import { Line } from 'react-chartjs-2'


const ChartHeadCounts = ({ data }) => {
  const [chart, setChar] = useState({});
  const [userReset, setReset] = useState(false)
  useEffect(() => {
    const fetchChartData = async () => {
      setChar({
        labels: data[1][0].headMesAmes.map((monthData) => monthData.data),
        datasets: [
          {
            label: "HeadCount",
            data: data[1][0].headMesAmes.map((monthData) => monthData.headcount),
            backgroundColor: ['red', 'blue'],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });

    }
    startTimer();
    fetchChartData();
  }, [data]);
  
  const startTimer = () => {
    setTimeout(() => {
      setReset(true);
    }, 2000);
  };
  return (
    <CunstomDiv>
    { userReset ? <Line data={chart} />: <CircularProgress color="secondary" size={50} />}
    </CunstomDiv>
  )
}

ChartHeadCounts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChartHeadCounts;