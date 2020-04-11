export interface Profile {
  name: string,
  age: number,
  description: string,
  processed: boolean
}

export const SET_PROFILE = 'SET_PROFILE';
export const SET_PROCESSED = 'SET_PROCESSED';

interface SetProfile {
  type: typeof SET_PROFILE
  payload: Profile
}

interface SetProcessed {
  type: typeof SET_PROCESSED
}

export type ProfileActionTypes = SetProfile | SetProcessed
