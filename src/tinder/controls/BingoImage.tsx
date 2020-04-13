import React, {FunctionComponent} from "react";
import "./BingoImage.scss";
import {RootState} from "../../store";
import {connect, ConnectedProps} from "react-redux";

const mapState = (state: RootState) => {
  return {
    players: state.players.players
  }
};

const connector = connect(mapState);

const BingoImage: FunctionComponent<ConnectedProps<typeof connector>> = ({players}) => {

  const winningPlayers = players.filter((player) => player.activeBingos.length > 0).map((player) => player.name);

  return <div id={'bingo-image'}>
    <img src={chrome.runtime.getURL('bingo.gif')} alt={'THATS A BINGO'} />
    {winningPlayers.length > 0 ? <div
      className={'bingo-caption'}>{winningPlayers.join(' AND ').toUpperCase()}
      {winningPlayers.length === 1 ? ' HAS' : ' HAVE'} A BINGO!
    </div> : ''}
  </div>;
};
export default connector(BingoImage);
