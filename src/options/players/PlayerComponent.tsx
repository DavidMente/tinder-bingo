import React, {FunctionComponent} from "react";
import {Player} from "../../store/players/types";
import {randomizeWords, removePlayer} from "../../store/players/actions";
import {connect, ConnectedProps} from "react-redux";

const mapDispatch = {
  randomizeWords: (player: Player) => randomizeWords(player),
  remove: (player: Player) => removePlayer(player)
};

const connector = connect(
  null,
  mapDispatch,
);

type PlayerComponentProps = {
  player: Player
}

const PlayerComponent: FunctionComponent<PlayerComponentProps & ConnectedProps<typeof connector>> = ({player, remove, randomizeWords}) =>
  <div>
    <div className={'player-name'}>{player.name}</div>
    <div className={'player-button'} title={'click to randomize words'} onClick={() => randomizeWords(player)}>
      randomize words
    </div>
    <div className={'player-button'} title={'remove player'} onClick={() => remove(player)}>
      <i className={'fas fa-times'} />
    </div>
  </div>;

export default connector(PlayerComponent);
