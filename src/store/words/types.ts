import {Player} from "../players/types";

export interface Words {
  words: string[],
}

export const COLLECT_WORDS = 'COLLECT_WORDS';

interface CollectWords {
  type: typeof COLLECT_WORDS
  payload: Player[]
}

export type WordsActionTypes = CollectWords
