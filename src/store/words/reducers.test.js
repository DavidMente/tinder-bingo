import {wordsReducer} from "./reducers";
import {COLLECT_WORDS} from "./types";

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(wordsReducer(undefined, {})).toEqual({words: []}
    );
  });

  it('should handle COLLECT_WORDS', () => {
    const players = [{id: 1, name: 'play', words: [{word: 'test', hits: 0}]}];
    expect(
      wordsReducer(undefined, {
        type: COLLECT_WORDS,
        payload: players
      })).toEqual({words: ['test']});
  });
});
