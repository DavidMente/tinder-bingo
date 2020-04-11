import React, {FunctionComponent} from "react";
import {Bingo, Word} from "../../../store/players/types";
import "./Bingo.scss";
import BingoCell from "./BingoCell";

type BingoBoardProps = {
  playerName: string,
  words: Word[],
  activeBingos: Bingo[],
}

const BingoBoard: FunctionComponent<BingoBoardProps> = ({words, activeBingos, playerName}) => {

  function hasActiveBingo(index) {
    return activeBingos
      .map((bingo) => bingo.cells.some((cell) => cell === index))
      .reduce((prev, curr) => prev || curr, false)
  }

  return <div className={'bingo-board'}>
    {words.map((word, index) => <BingoCell player={playerName} index={index} key={index}
                                           activeBingo={hasActiveBingo(index)} word={word} />)}
  </div>;
};

export default BingoBoard;
