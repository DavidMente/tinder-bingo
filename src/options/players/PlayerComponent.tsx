import React, {FunctionComponent} from "react";
import {Player} from "../../store/players/types";
import {removePlayer} from "../../store/players/actions";
import {connect, ConnectedProps} from "react-redux";

const mapDispatch = {
  remove: (player: Player) => removePlayer(player)
};

const connector = connect(
  null,
  mapDispatch,
);

type PlayerComponentProps = {
  player: Player
}

const PlayerComponent: FunctionComponent<PlayerComponentProps & ConnectedProps<typeof connector>> = ({player, remove}) =>
  <div>
    <div className={'player-name'}>{player.name}</div>
    <div className={'player-button'} onClick={() => remove(player)}>
      <i className={'fas fa-times'}/>
    </div>
  </div>;

export default connector(PlayerComponent);
