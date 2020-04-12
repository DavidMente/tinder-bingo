import {Profile} from "../profile/types";

export interface Player {
  id: number,
  name: string,
  words: Word[],
  totalBingos: number,
  activeBingos: Bingo[],
}

export interface Word {
  word: string,
  hits: number,
}

export interface ChangedWord {
  player: string,
  index: number,
  word: string
}

export interface Bingo {
  cells: number[]
}

export interface Players {
  players: Player[]
}

export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const PROCESS_WORDLIST = 'PROCESS_WORDLIST';
export const CLEAR_ACTIVE_BINGOS = 'CLEAR_ACTIVE_BINGOS';
export const CHANGE_WORD = 'CHANGE_WORD';
export const RANDOMIZE_WORDS = 'RANDOMIZE_WORD';

interface AddPlayer {
  type: typeof ADD_PLAYER,
  payload: string
}

interface RemovePlayer {
  type: typeof REMOVE_PLAYER,
  payload: Player
}

interface ProcessWordlist {
  type: typeof PROCESS_WORDLIST,
  payload: string[]
}

interface ClearActiveBingos {
  type: typeof CLEAR_ACTIVE_BINGOS
}

interface ChangeWord {
  type: typeof CHANGE_WORD
  payload: ChangedWord
}

interface RandomizeWords {
  type: typeof RANDOMIZE_WORDS,
  payload: Player
}

export type PlayerActionTypes =
  AddPlayer
  | RemovePlayer
  | ProcessWordlist
  | ClearActiveBingos
  | ChangeWord
  | RandomizeWords
