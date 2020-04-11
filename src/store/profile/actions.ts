import {Profile, ProfileActionTypes, SET_PROCESSED, SET_PROFILE} from "./types";

export function setProfile(profile: Profile): ProfileActionTypes {
  return {
    type: SET_PROFILE,
    payload: profile
  }
}

export function setProcessed(): ProfileActionTypes {
  return {
    type: SET_PROCESSED,
  }
}
