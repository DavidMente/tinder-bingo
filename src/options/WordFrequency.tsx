import React, {ChangeEvent, FunctionComponent, useEffect} from "react";
import {RootState} from "../store";
import {setWordFrequency} from "../store/controls/actions";
import {connect, ConnectedProps} from "react-redux";
import {getRandomWord} from "../utils/words";

const mapState = (state: RootState) => {
  return {
    wordFrequency: state.controls.wordFrequency
  }
};

const mapDispatch = {
  setWordFrequency: (frequency: number) => setWordFrequency(frequency)
};

const connector = connect(mapState, mapDispatch);

const WordFrequency: FunctionComponent<ConnectedProps<typeof connector>> = ({wordFrequency, setWordFrequency}) => {

  function getRandomWords() {
    return [getRandomWord(wordFrequency), getRandomWord(wordFrequency), getRandomWord(wordFrequency)];
  }

  let randomWords = getRandomWords();

  useEffect(() => {
    randomWords = getRandomWords();
  }, [wordFrequency]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setWordFrequency(Number(event.target.value));
  }

  return <div className={'options'}>
    <div>Choose how rare the random words should be</div>
    <div className={'slider-container'}>
      <div>Common</div>
      <div><input type={'range'} value={wordFrequency} onChange={handleChange} /></div>
      <div>Rare</div>
    </div>
    <div>For example: {randomWords.map((word) => word.word).join(', ')}</div>
  </div>
};

export default connector(WordFrequency)
