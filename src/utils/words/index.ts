import {Word} from "../../store/players/types";
import WORDS from './data';

const wordList = WORDS;

export function getRandomWord(frequency = 50): Word {
  const randomNumber = Math.random() * 0.5 + frequency * 0.005;
  const index = Math.floor(randomNumber * wordList.length);
  const word = wordList[index];
  return {word: word.word, hits: 0}
}
