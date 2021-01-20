import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';

const TimerButton = (props: { buttonAction: () => void; buttonValue: React.ReactNode; className?: string }) => (
  <div className="button-container" onClick={() => props.buttonAction()}>
    <p className="button-value">{props.buttonValue}</p>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;