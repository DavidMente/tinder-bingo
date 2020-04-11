import React, {ChangeEvent, FunctionComponent, useEffect} from "react";
import {addPlayer} from "../../store/players/actions";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../store";
import {Player} from "../../store/players/types";
import {collectWords} from "../../store/words/actions";

const mapState = (state: RootState) => {
  return {
    playerCount: state.players.players.length,
    players: state.players.players
  }
};

const mapDispatch = {
  collectAllWords: (players: Player[]) => collectWords(players),
  add: (name: string) => addPlayer(name)
};

const connector = connect(mapState, mapDispatch);

const AddPlayer: FunctionComponent<ConnectedProps<typeof connector>> = ({collectAllWords, playerCount, players, add}) => {

  useEffect(() => {
    collectAllWords(players);
  }, [playerCount]);

  let name = '';

  function editName(event: ChangeEvent<HTMLInputElement>) {
    name = event.target.value;
  }

  function addIfNotEmpty(name: string): void {
    if (name !== '') {
      add(name)
    }
  }

  return <div>
    <input type={"text"} onChange={editName} placeholder={'Add Player'}/>
    <div className={'player-button'} onClick={() => addIfNotEmpty(name)}>
      <i className={'fas fa-check'}/>
    </div>
  </div>
};

export default connector(AddPlayer)
