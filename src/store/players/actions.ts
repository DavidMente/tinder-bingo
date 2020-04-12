import {
  ADD_PLAYER,
  CHANGE_WORD,
  ChangedWord,
  CLEAR_ACTIVE_BINGOS,
  Player,
  PlayerActionTypes,
  PROCESS_WORDLIST,
  RANDOMIZE_WORDS,
  REMOVE_PLAYER
} from "./types";

export function addPlayer(name: string): PlayerActionTypes {
  return {
    type: ADD_PLAYER,
    payload: name
  }
}

export function removePlayer(player: Player): PlayerActionTypes {
  return {
    type: REMOVE_PLAYER,
    payload: player
  }
}

export function processWordlist(words: string[]): PlayerActionTypes {
  return {
    type: PROCESS_WORDLIST,
    payload: words
  }
}

export function clearActiveBingos(): PlayerActionTypes {
  return {
    type: CLEAR_ACTIVE_BINGOS,
  }
}

export function changeWord(changedWord: ChangedWord): PlayerActionTypes {
  return {
    type: CHANGE_WORD,
    payload: changedWord
  }
}

export function randomizeWords(player: Player): PlayerActionTypes {
  return {
    type: RANDOMIZE_WORDS,
    payload: player
  }
}
