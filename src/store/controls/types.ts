export interface Controls {
  isRunning: boolean,
  rounds: number
}

export const RUN_ALGORITHM = 'RUN_ALGORITHM';
export const STOP_ALGORITHM = 'STOP_ALGORITHM';
export const ADD_ROUND = 'ADD_ROUND';

interface RunAlgorithm {
  type: typeof RUN_ALGORITHM
}

interface StopAlgorithm {
  type: typeof STOP_ALGORITHM
}

interface AddRound {
  type: typeof ADD_ROUND
}

export type ControlsActionTypes = RunAlgorithm | StopAlgorithm | AddRound
