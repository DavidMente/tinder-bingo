export interface Controls {
  isRunning: boolean,
  rounds: number,
  stopOn: StopOn
}

export const RUN_ALGORITHM = 'RUN_ALGORITHM';
export const STOP_ALGORITHM = 'STOP_ALGORITHM';
export const ADD_ROUND = 'ADD_ROUND';
export const CHANGE_STOP_ON = 'CHANGE_STOP_ON';

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

export type ControlsActionTypes = RunAlgorithm | StopAlgorithm | AddRound | ChangeStopOn
