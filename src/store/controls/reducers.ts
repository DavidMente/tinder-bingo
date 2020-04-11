import {ADD_ROUND, Controls, ControlsActionTypes, RUN_ALGORITHM, STOP_ALGORITHM} from "./types";

const initialState: Controls = {
  isRunning: false,
  rounds: 0
};

export function controlsReducer(state = initialState, action: ControlsActionTypes): Controls {
  switch (action.type) {
    case RUN_ALGORITHM:
      return {...state, isRunning: true};
    case STOP_ALGORITHM:
      return {...state, isRunning: false};
    case ADD_ROUND:
      return {...state, rounds: state.rounds + 1};
    default:
      return state
  }
}
