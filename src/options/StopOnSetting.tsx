import React, {ChangeEvent, FunctionComponent} from "react";
import {RootState} from "../store";
import {connect, ConnectedProps} from "react-redux";
import {StopOn} from "../store/controls/types";
import {changeStopOn} from "../store/controls/actions";

const mapState = (state: RootState) => {
  return {
    stopOn: state.controls.stopOn
  }
};

const mapDispatch = {
  changeStopOn: (stopOn: StopOn) => changeStopOn(stopOn)
};

const connector = connect(mapState, mapDispatch);

const StopOnSetting: FunctionComponent<ConnectedProps<typeof connector>> = ({stopOn, changeStopOn}) => {

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const stopOn = StopOn[event.target.value];
    changeStopOn(stopOn);
  }

  return <div>
    <label htmlFor={'stop-on-select'}>Stop Madness on</label>
    <select value={stopOn} id={'stop-on-select'} onChange={handleChange}>
      <option value={StopOn.BINGO}>Bingo</option>
      <option value={StopOn.HIT}>Hits</option>
      <option value={StopOn.NEVER}>The party never ends</option>
    </select>
  </div>;
}
export default connector(StopOnSetting)
