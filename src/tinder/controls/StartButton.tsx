import React, {FunctionComponent} from "react";
import {RootState} from "../../store";
import {connect, ConnectedProps} from "react-redux";
import {runAlgorithm, stopAlgorithm} from "../../store/controls/actions";

const mapState = (state: RootState) => {
  return {
    isRunning: state.controls.isRunning,
    rounds: state.controls.rounds,
  }
};

const mapDispatch = {
  run: () => runAlgorithm(),
  stop: () => stopAlgorithm(),
};

const connector = connect(mapState, mapDispatch);

const StartButton: FunctionComponent<ConnectedProps<typeof connector>> = ({isRunning, run, stop, rounds}) => {

  function handleClick() {
    if (isRunning) {
      stop();
    } else {
      run()
    }
  }

  return <div>
    <button className={'start-button' + (isRunning ? ' active' : '')}
            onClick={handleClick}>{isRunning ? 'Stop' : 'Start'} the Madness!
    </button>
    <div className={'rounds'}>Rounds: {rounds}</div>
  </div>;

};

export default connector(StartButton);
