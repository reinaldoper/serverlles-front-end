import { useState } from 'react'
import { Typography, Alert } from '@mui/material'
import { employees } from './service/fetch';
import { CunstomForm, CunstomPaper, CunstomField, CunstomButton, CunstomBox } from './styles/loginForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requiredTurnover } from './redux/actions/action';
import { useNavigate } from "react-router-dom";

function App({ dispatch }) {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const history = useNavigate();


  const handleClick = async () => {
    if (validateEmail(email)) {
      const update = {
        email,
      };
      const options = {
        method: 'POST',
        body: JSON.stringify(update),
      };
      const getTurnover = 'getTurnover';
      const { error, data } = await employees(options, getTurnover);
      if (error) {
        setShowAlert(true);
        setMsg(error);
        setEmail('');
        startTimer();
      } else {
        dispatch(requiredTurnover(data));
        setEmail('');
        history('/chart');
      }
    } else {
      setShowAlert(true);
      setMsg('check it email!');
      setEmail('');
      startTimer();
    }
  };

  const validateEmail = (email) => {
    var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (reg.test(email)) {
      return true;
    }
    else {
      return false;
    }
  }
  const startTimer = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };


  return (
    <CunstomBox>
      <CunstomForm>
        <CunstomPaper elevation={3}>
          <Typography variant="h1" component="h2">
            Valuation
          </Typography>
          <CunstomField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CunstomButton
            variant="contained"
            onClick={handleClick}
          >
            GRÁFICO
          </CunstomButton>
          {showAlert && (
            <Alert severity="error">
              This is an error alert — <strong>{msg}</strong>
            </Alert>
          )}
        </CunstomPaper>
      </CunstomForm>
    </CunstomBox>
  )
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
