import {ADD_ROUND, CHANGE_STOP_ON, ControlsActionTypes, RUN_ALGORITHM, STOP_ALGORITHM, StopOn} from "./types";

export function runAlgorithm(): ControlsActionTypes {
  return {
    type: RUN_ALGORITHM,
  }
}

export function stopAlgorithm(): ControlsActionTypes {
  return {
    type: STOP_ALGORITHM,
  }
}

export function addRound(): ControlsActionTypes {
  return {
    type: ADD_ROUND,
  }
}

export function changeStopOn(stopOn: StopOn): ControlsActionTypes {
  return {
    type: CHANGE_STOP_ON,
    payload: stopOn
  }
}
