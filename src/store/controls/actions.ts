import {ADD_ROUND, ControlsActionTypes, RUN_ALGORITHM, STOP_ALGORITHM} from "./types";

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
