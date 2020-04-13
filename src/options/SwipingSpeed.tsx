import React, {ChangeEvent, FunctionComponent} from "react";
import {RootState} from "../store";
import {connect, ConnectedProps} from "react-redux";
import {setSwipingSpeed} from "../store/controls/actions";

const mapState = (state: RootState) => {
  return {
    swipingSpeed: state.controls.swipingSpeed
  }
};

const mapDispatch = {
  setSwipingSpeed: (speed: number) => setSwipingSpeed(speed)
};

const connector = connect(mapState, mapDispatch);

const SwipingSpeed: FunctionComponent<ConnectedProps<typeof connector>> = ({swipingSpeed, setSwipingSpeed}) => {

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSwipingSpeed(Number(event.target.value));
  }

  return <div className={'options'}>
    <label htmlFor={'swiping-speed'}>Swiping speed in milliseconds (recommended: 500)</label>
    <input type={'number'} value={swipingSpeed} id={'swiping-speed'} onChange={handleChange} />
  </div>;
};
export default connector(SwipingSpeed)
