import {SET_PROFILE} from "./types";
import {setProfile} from "./actions";

describe('actions', () => {
  it('should create an action to update a profile', () => {
    const profile = {name: 'TestName', age: '20', description: 'Desc'};
    const expectedAction = {
      type: SET_PROFILE,
      payload: profile
    };
    expect(setProfile(profile)).toEqual(expectedAction);
  });
});
