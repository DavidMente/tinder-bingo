import {ADD_PLAYER} from "./types";
import {addPlayer} from "./actions";

describe('actions', () => {
  it('should create a player', () => {
    const name = 'Player 1';
    const expectedAction = {
      type: ADD_PLAYER,
      payload: name
    };
    expect(addPlayer(name)).toEqual(expectedAction);
  });
});
