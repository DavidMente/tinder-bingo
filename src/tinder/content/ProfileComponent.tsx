import React, {FunctionComponent, useEffect} from "react";
import {RootState} from "../../store";
import {connect, ConnectedProps} from "react-redux";
import {nope} from "../../utils/dom";
import {clearActiveBingos, processWordlist} from "../../store/players/actions";
import {setProcessed} from "../../store/profile/actions";
import Highlighter from "react-highlight-words";
import {addRound} from "../../store/controls/actions";
import './Profile.scss';

const mapState = (state: RootState) => {
  return {
    isRunning: state.controls.isRunning,
    words: state.words.words,
    profile: state.profile,
    totalHits: state.players.players.map((player) =>
      player.words
        .map((word) => word.hits)
        .reduce((curr, prev) => curr + prev, 0))
      .reduce((curr, prev) => curr + prev, 0)
  }
};

const mapDispatch = {
  process: (words: string[]) => processWordlist(words),
  setProcessed: () => setProcessed(),
  addRound: () => addRound(),
  clearActiveBingos: () => clearActiveBingos()
};

const connector = connect(mapState, mapDispatch);

const ProfileComponent: FunctionComponent<ConnectedProps<typeof connector>> =
  ({isRunning, profile, words, process, setProcessed, totalHits, clearActiveBingos, addRound}) => {

  useEffect(() => {
    if (isRunning) {
      processProfile();
    }
  }, [profile.name, isRunning]);

  useEffect(() => {
    if (isRunning) {
      continueIfProcessed();
    }
  }, [profile.processed, isRunning]);

  useEffect(() => {
    setProcessed();
  }, [totalHits]);

  function processProfile() {
    if (profile.processed !== true) {
      const matchingWords = getMatchingWords();
      if (matchingWords.length > 0) {
        process(matchingWords);
      } else {
        setProcessed();
      }
    }
  }

  function continueIfProcessed() {
    if (profile.processed) {
      setTimeout(() => {
        nope();
        clearActiveBingos();
        addRound();
      }, 500);
    }
  }

  function getMatchingWords() {
    return profile.description !== null ? words.filter((word) => profile.description.toLowerCase().includes(word)) : [];
  }

  return <div className={'profile'}>
    <div className={'profile-header'}>Current profile: {profile.name}</div>
    <Highlighter
      searchWords={words}
      textToHighlight={profile.description || ''}
    />
  </div>;
}
export default connector(ProfileComponent)
