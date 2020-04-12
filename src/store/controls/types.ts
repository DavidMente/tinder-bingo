export interface Controls {
  isRunning: boolean,
  rounds: number,
  stopOn: StopOn,
  swipeRight: boolean,
  wordFrequency: number
}

export const RUN_ALGORITHM = 'RUN_ALGORITHM';
export const STOP_ALGORITHM = 'STOP_ALGORITHM';
export const ADD_ROUND = 'ADD_ROUND';
export const CHANGE_STOP_ON = 'CHANGE_STOP_ON';
export const TOGGLE_SWIPE_RIGHT = 'TOGGLE_SWIPE_RIGHT';
export const SET_WORD_FREQUENCY = 'SET_WORD_FREQUENCY';

interface RunAlgorithm {
  type: typeof RUN_ALGORITHM
}

interface StopAlgorithm {
  type: typeof STOP_ALGORITHM
}

interface AddRound {
  type: typeof ADD_ROUND
}

export enum StopOn {
  BINGO = 'BINGO',
  HIT = 'HIT',
  NEVER = 'NEVER'
}

interface ChangeStopOn {
  type: typeof CHANGE_STOP_ON
  payload: StopOn
}

interface ToggleSwipeRight {
  type: typeof TOGGLE_SWIPE_RIGHT
}

interface SetWordFrequency {
  type: typeof SET_WORD_FREQUENCY,
  payload: number
}

export type ControlsActionTypes =
  RunAlgorithm
  | StopAlgorithm
  | AddRound
  | ChangeStopOn
  | ToggleSwipeRight
  | SetWordFrequency
