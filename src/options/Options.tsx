import React, {FunctionComponent} from "react";
import "./Options.scss";
import {RootState} from "../store";
import {connect, ConnectedProps} from "react-redux";
import PlayerComponent from "./players/PlayerComponent";
import AddPlayer from "./players/AddPlayer";
import StopOnSetting from "./StopOnSetting";
import SwipeRightCheckbox from "./SwipeRightCheckbox";
import WordFrequency from "./WordFrequency";
import SwipingSpeed from "./SwipingSpeed";
import Instructions from "../tinder/players/Instructions";

const mapState = (state: RootState) => {
  return {
    players: state.players.players
  }
};

const connector = connect(mapState);

type OptionsProps = ConnectedProps<typeof connector>

const Options: FunctionComponent<OptionsProps> = ({players}) => {
  return <div className="options-container">
    <div className={'options-header'}><i className="fas fa-fire" /> Tinder Bingo</div>
    <div className={'player-options options'}>
      <div>Players</div>
      <AddPlayer />
      {players.map((player) => <PlayerComponent key={player.id} player={player} />)}
    </div>
    <StopOnSetting />
    <WordFrequency />
    <SwipingSpeed />
    <SwipeRightCheckbox />
    <Instructions />
  </div>;
};

export default connector(Options);
