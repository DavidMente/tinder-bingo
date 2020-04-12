import {
  ADD_ROUND,
  CHANGE_STOP_ON,
  Controls,
  ControlsActionTypes,
  RUN_ALGORITHM,
  STOP_ALGORITHM,
  StopOn,
  TOGGLE_SWIPE_RIGHT
} from "./types";

const initialState: Controls = {
  isRunning: false,
  rounds: 0,
  stopOn: StopOn.BINGO,
  swipeRight: false
};

export function controlsReducer(state = initialState, action: ControlsActionTypes): Controls {
  switch (action.type) {
    case RUN_ALGORITHM:
      return {...state, isRunning: true};
    case STOP_ALGORITHM:
      return {...state, isRunning: false};
    case ADD_ROUND:
      return {...state, rounds: state.rounds + 1};
    case CHANGE_STOP_ON: {
      return {...state, stopOn: action.payload};
    }
    case TOGGLE_SWIPE_RIGHT: {
      return {...state, swipeRight: !state.swipeRight};
    }
    default:
      return state
  }
}