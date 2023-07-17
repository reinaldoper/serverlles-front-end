import PropTypes from 'prop-types';

const ChartTurnover = ({ turnover }) => {
  return (
    <div>
      <h1>Turnover</h1>
      {turnover.length}
    </div>
  )
}

ChartTurnover.propTypes = {
  turnover: PropTypes.array.isRequired,
};


export default ChartTurnover;