import React, {FunctionComponent, useEffect} from "react";
import {Bingo, Word} from "../../store/players/types";
import BingoBoard from "./bingo/BingoBoard";
import "./PlayerSection.scss";
import {stopAlgorithm} from "../../store/controls/actions";
import {connect, ConnectedProps} from "react-redux";
import {thatsABingo} from "../../utils/dom";

type PlayerSectionProps = {
  name: string,
  words: Word[],
  totalBingos: number,
  activeBingos: Bingo[]
}

const mapDispatch = {
  stop: () => stopAlgorithm(),
};

const connector = connect(null, mapDispatch);

const PlayerSection: FunctionComponent<PlayerSectionProps & ConnectedProps<typeof connector>> =
  ({stop, name, words, totalBingos, activeBingos}) => {

    useEffect(() => {
      if (activeBingos.length > 0) {
        thatsABingo();
        stop();
      }
    }, [activeBingos]);

    return <div className={'player-section'}>
      <div className={'player-header'}>
        <div className={'player-name'}>{name}</div>
        <div>Bingos: {totalBingos}</div>
        <div>Hits: {words.map((word) => word.hits).reduce((prev, curr) => prev + curr, -1)}</div>
      </div>
      <BingoBoard playerName={name} words={words} activeBingos={activeBingos} />
    </div>;
  };

export default connector(PlayerSection);
