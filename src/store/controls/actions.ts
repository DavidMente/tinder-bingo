import {
  ADD_ROUND,
  CHANGE_STOP_ON,
  ControlsActionTypes,
  RUN_ALGORITHM,
  SET_SWIPING_SPEED,
  SET_WORD_FREQUENCY,
  STOP_ALGORITHM,
  StopOn,
  TOGGLE_SWIPE_RIGHT
} from "./types";

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

export function toggleSwipeRight(): ControlsActionTypes {
  return {
    type: TOGGLE_SWIPE_RIGHT,
  }
}

export function setWordFrequency(frequency: number): ControlsActionTypes {
  return {
    type: SET_WORD_FREQUENCY,
    payload: frequency
  }
}

export function setSwipingSpeed(speed: number): ControlsActionTypes {
  return {
    type: SET_SWIPING_SPEED,
    payload: speed
  }
}
