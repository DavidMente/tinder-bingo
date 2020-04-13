import React, {FunctionComponent} from "react";
import {RootState} from "../../store";
import {connect, ConnectedProps} from "react-redux";
import PlayerSection from "./PlayerSection";
import Instructions from "./Instructions";

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
      : <Instructions />}
  </div>;

export default connector(PlayersSection)
