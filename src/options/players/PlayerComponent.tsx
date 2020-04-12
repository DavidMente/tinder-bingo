import React, {FunctionComponent} from "react";
import {Player} from "../../store/players/types";
import {randomizeWords, removePlayer} from "../../store/players/actions";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../store";

const mapState = (state: RootState) => {
  return {
    wordFrequency: state.controls.wordFrequency
  }
};

const mapDispatch = {
  randomizeWords: (player: Player, wordFrequency: number) => randomizeWords(player, wordFrequency),
  remove: (player: Player) => removePlayer(player)
};

const connector = connect(mapState, mapDispatch,);

type PlayerComponentProps = {
  player: Player
}

const PlayerComponent: FunctionComponent<PlayerComponentProps & ConnectedProps<typeof connector>> =
  ({player, remove, randomizeWords, wordFrequency}) =>
    <div>
      <div className={'player-name'}>{player.name}</div>
      <div className={'player-button'} title={'click to randomize words'}
           onClick={() => randomizeWords(player, wordFrequency)}>
        randomize words
      </div>
      <div className={'player-button'} title={'remove player'} onClick={() => remove(player)}>
        <i className={'fas fa-times'} />
      </div>
    </div>;

export default connector(PlayerComponent);
