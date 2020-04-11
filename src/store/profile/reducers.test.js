import {profileReducer} from "./reducers";
import {SET_PROFILE} from "./types";

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual({
        name: null,
        age: null,
        description: null
      }
    );
  });

  it('should handle SET_PROFILE', () => {
    const profile = {name: 'TestName', age: '20', description: 'Desc'};
    expect(
      profileReducer(undefined, {
        type: SET_PROFILE,
        payload: profile
      })).toEqual(profile);
  });
});
