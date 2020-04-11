import {Word} from "../../store/players/types";
import WORDS from './data'

export function getRandomWord(): Word {
  const wordList = WORDS;
  const word = wordList[Math.floor(Math.random() * wordList.length)];
  return {word: word, hits: 0}
}
