import {COLLECT_WORDS, WordsActionTypes} from "./types";
import {Player} from "../players/types";

export function collectWords(players: Player[]): WordsActionTypes {
  return {
    type: COLLECT_WORDS,
    payload: players
  }
}
