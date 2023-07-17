import PropTypes from 'prop-types';

const  ChartHeadCounts = ({ turnover }) => {
  return (
    <div>
      <h1>HeadCount</h1>
      {turnover.length}
    </div>
  )
}

ChartHeadCounts.propTypes = {
  turnover: PropTypes.array.isRequired,
};

export default ChartHeadCounts;