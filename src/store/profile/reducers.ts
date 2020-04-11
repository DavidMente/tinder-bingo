import {Profile, ProfileActionTypes, SET_PROCESSED, SET_PROFILE} from "./types";

const initialState: Profile = {
  name: null,
  age: null,
  description: null,
  processed: true
};

export function profileReducer(state = initialState, action: ProfileActionTypes): Profile {
  switch (action.type) {
    case SET_PROFILE:
      const processed = state.name !== action.payload.name ? false : state.processed;
      return {...state, ...action.payload, processed: processed};
    case SET_PROCESSED:
      return {...state, processed: true};
    default:
      return state
  }
}
