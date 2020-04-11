import {
  ADD_PLAYER,
  CHANGE_WORD,
  CLEAR_ACTIVE_BINGOS,
  PlayerActionTypes,
  Players,
  PROCESS_WORDLIST,
  REMOVE_PLAYER,
  Word
} from "./types";
import {getRandomWord} from "../../utils/words";
import {getBingos, getNewBingos} from "./bingo";

const initialState: Players = {
  players: []
};

function generateRandomId(): number {
  return Math.round(Math.random() * 10000);
}

export function getRandomWords(): Word[] {
  const wordList = Array.from({length: 25}).map(() => getRandomWord());
  wordList[12] = {word: 'FREE', hits: 1};
  return wordList;
}

function updateWordsWithWordlist(words: Word[], wordlist: string[]): Word[] {
  return words.map((word) => incrementIfFound(word, wordlist))
}

function incrementIfFound(word: Word, wordlist: string[]): Word {
  if (wordlist.some((w) => w === word.word)) {
    return {word: word.word, hits: word.hits + 1}
  } else {
    return word
  }
}

export function playersReducer(state = initialState, action: PlayerActionTypes): Players {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        players: [...state.players, {
          name: action.payload,
          id: generateRandomId(),
          words: getRandomWords(),
          totalBingos: 0,
          activeBingos: []
        }]
      };
    case REMOVE_PLAYER:
      return {players: state.players.filter((player) => player.id !== action.payload.id)};
    case PROCESS_WORDLIST:
      return {
        players: state.players.map((player) => {
          const previousBingos = getBingos(player.words);
          const words = updateWordsWithWordlist(player.words, action.payload);
          const currBingos = getBingos(words);
          const newBingos = getNewBingos(currBingos, previousBingos);
          return {...player, words: words, totalBingos: currBingos.length, activeBingos: newBingos}
        })
      };
    case CLEAR_ACTIVE_BINGOS:
      return {
        players: state.players.map((player) => {
          return {...player, activeBingos: []}
        })
      };
    case CHANGE_WORD:
      return {
        players: state.players.map((player) => {
          if (player.name === action.payload.player) {
            const words = player.words;
            words[action.payload.index] = {word: action.payload.word.toLowerCase(), hits: 0};
            return {...player, words: words}
          } else {
            return player
          }
        })
      };
    default:
      return state
  }
}
