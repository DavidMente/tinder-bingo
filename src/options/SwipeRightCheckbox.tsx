import React, {ChangeEvent, FunctionComponent, ReactComponentElement} from "react";
import {RootState} from "../store";
import {toggleSwipeRight} from "../store/controls/actions";
import {connect, ConnectedProps} from "react-redux";

const mapState = (state: RootState) => {
  return {
    swipeRight: state.controls.swipeRight
  }
};

const mapDispatch = {
  toggleSwipeRight: () => toggleSwipeRight()
};

const connector = connect(mapState, mapDispatch);

const SwipeRightCheckbox: FunctionComponent<ConnectedProps<typeof connector>> = ({toggleSwipeRight, swipeRight}) => {

  return <div className={'options'}>
    <label htmlFor={'swipe-right-checkbox'}>I actually want to swipe right</label>
    <input className={'styled-input'} id={'swipe-right-checkbox'} type={'checkbox'} checked={swipeRight} onChange={toggleSwipeRight} />
    {swipeRight ? 'LOL, okay' : ''}
  </div>
};

export default connector(SwipeRightCheckbox)
