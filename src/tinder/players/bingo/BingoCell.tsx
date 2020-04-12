import React, {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import {Player, Word} from "../../../store/players/types";
import {changeWord} from "../../../store/players/actions";
import {connect, ConnectedProps} from "react-redux";
import {collectWords} from "../../../store/words/actions";
import {RootState} from "../../../store";

const mapState = (state: RootState) => {
  return {
    players: state.players.players
  }
};

const mapDispatch = {
  collectAllWords: (players: Player[]) => collectWords(players),
  changeWord: (player: string, index: number, word: string) => changeWord({player, index, word})
};

type BingoCellProps = {
  player: string,
  index: number,
  word: Word,
  activeBingo: boolean
}

const connector = connect(mapState, mapDispatch);

const BingoCell: FunctionComponent<BingoCellProps & ConnectedProps<typeof connector>> =
  ({player, index, word, activeBingo, changeWord, players, collectAllWords}) => {

    useEffect(() => {
      setEditableWord(word.word);
      collectAllWords(players);
    }, [word.word]);

    const [editMode, setEditMode] = useState(false);
    const [editableWord, setEditableWord] = useState(word.word);

    function editWord(event: ChangeEvent<HTMLInputElement>) {
      setEditableWord(event.target.value);
    }

    function cancel() {
      setEditableWord(word.word);
      setEditMode(false);
    }

    function submit() {
      changeWord(player, index, editableWord);
      setEditMode(false);
    }

    return <div className={'bingo-cell' + (word.hits > 0 ? ' active' : '') + (activeBingo ? ' active-bingo' : '')}>
      {editMode && word.word !== 'FREE'
        ? <div>
          <input autoFocus className={'cell-input'} type={'text'} value={editableWord} onChange={editWord} />
          <div className={'cell-button'} onClick={submit}>
            <i className={"fas fa-check"} />
          </div>
          <div className={'cell-button'} onClick={cancel}>
            <i className={"fas fa-times"} />
          </div>
        </div>
        : <div>
        <span onClick={() => setEditMode(true)} title={word.word}
              className={'bingo-word' + (word.word.length > 7 ? ' compact' : '')}>{word.word}</span> {word.word !== 'FREE' ?
          <span className={'bingo-hits'}>({word.hits})</span> : ''}
        </div>
      }
    </div>;
  };
export default connector(BingoCell)
