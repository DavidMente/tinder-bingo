import React, {FunctionComponent, useEffect} from "react";
import {Bingo, Word} from "../../store/players/types";
import BingoBoard from "./bingo/BingoBoard";
import "./PlayerSection.scss";
import {stopAlgorithm} from "../../store/controls/actions";
import {connect, ConnectedProps} from "react-redux";
import {thatsABingo} from "../../utils/dom";
import {RootState} from "../../store";
import {StopOn} from "../../store/controls/types";

type PlayerSectionProps = {
  name: string,
  words: Word[],
  totalBingos: number,
  activeBingos: Bingo[],
}

const mapState = (state: RootState) => {
  return {
    stopOn: state.controls.stopOn
  }
};

const mapDispatch = {
  stop: () => stopAlgorithm(),
};

const connector = connect(mapState, mapDispatch);

const PlayerSection: FunctionComponent<PlayerSectionProps & ConnectedProps<typeof connector>> =
  ({stop, name, words, totalBingos, activeBingos, stopOn}) => {

    useEffect(() => {
      if (activeBingos.length > 0) {
        thatsABingo();
        if (stopOn === StopOn.BINGO) {
          stop();
        }
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
