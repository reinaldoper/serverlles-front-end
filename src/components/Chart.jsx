import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { ChartBox, CunstomButton } from "../styles/loginForm";
import ChartHeadCounts from "./ChartHeadCounts";
import ChartTurnover from "./ChartTurnover";

const Chart = ({ turnover }) => {
  const navigate = useNavigate();
  return (
    <ChartBox>
      <ChartHeadCounts turnover={turnover} />
      <CunstomButton
        variant="contained"
        onClick={() => navigate(-1)}
      >
        Home
      </CunstomButton>
      <ChartTurnover turnover={turnover} />
    </ChartBox>
  )
}

Chart.propTypes = {
  turnover: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  turnover: state.reducerFetch.turnover,
});


export default connect(mapStateToProps)(Chart);
