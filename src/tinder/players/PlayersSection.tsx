import React, {FunctionComponent} from "react";
import {RootState} from "../../store";
import {connect, ConnectedProps} from "react-redux";
import PlayerSection from "./PlayerSection";

const mapState = (state: RootState) => {
  return {
    players: state.players.players
  }
};

const connector = connect(mapState);

const PlayersSection: FunctionComponent<ConnectedProps<typeof connector>> = ({players}) =>
  <div>
    {players.length > 0
      ? players.map((player) => <PlayerSection key={player.id} name={player.name} words={player.words}
                                               totalBingos={player.totalBingos} activeBingos={player.activeBingos} />)
      : 'Click on the Tinder Bingo extension icon (top right) to add players. ' +
      'You can edit the randomly chosen words on the Bingo boards by clicking on them. ' +
      'If the program gets stuck, just press on stop and start again.'}
  </div>;

export default connector(PlayersSection)
