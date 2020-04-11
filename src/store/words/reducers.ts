import {COLLECT_WORDS, Words, WordsActionTypes} from "./types";
import {Player} from "../players/types";

const initialState: Words = {
  words: []
};

function getAllWords(players: Player[]): string[] {
  const words: string[] = [];
  players.forEach((player) => player.words.forEach((word) => {
    if (!words.some((item) => item === word.word)) {
      if (word.word !== 'FREE') {
        words.push(word.word)
      }
    }
  }));
  return words
}

export function wordsReducer(state = initialState, action: WordsActionTypes): Words {
  switch (action.type) {
    case COLLECT_WORDS:
      return {words: getAllWords(action.payload)};
    default:
      return state
  }
}
