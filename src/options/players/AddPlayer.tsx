import React, {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import {addPlayer} from "../../store/players/actions";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../store";
import {Player} from "../../store/players/types";
import {collectWords} from "../../store/words/actions";

const mapState = (state: RootState) => {
  return {
    playerCount: state.players.players.length,
    players: state.players.players,
    wordFrequency: state.controls.wordFrequency
  }
};

const mapDispatch = {
  collectAllWords: (players: Player[]) => collectWords(players),
  add: (name: string, wordFrequency: number) => addPlayer(name, wordFrequency)
};

const connector = connect(mapState, mapDispatch);

const AddPlayer: FunctionComponent<ConnectedProps<typeof connector>> = ({collectAllWords, playerCount, players, add, wordFrequency}) => {

  useEffect(() => {
    collectAllWords(players);
  }, [playerCount]);

  const [name, setName] = useState('');

  function editName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function keyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      submit(name);
    }
  }

  function submit(name: string): void {
    add(name, wordFrequency);
    setName('');
  }

  return <div>
    <input className={'styled-input'} value={name} type={"text"} onChange={editName} placeholder={'Add Player'} />
    {name !== '' ? <div className={'player-button'} onClick={() => submit(name)} onKeyDown={keyDown}>
      <i className={'fas fa-check'} />
    </div> : ''}
  </div>
};

export default connector(AddPlayer)
