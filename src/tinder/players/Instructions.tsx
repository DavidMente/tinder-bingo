import React, {FunctionComponent} from "react";

const Instructions: FunctionComponent = () =>
  <div className={'instructions'}>
    <div className={'header'}>Tinder Bingo Instructions</div>
    <div>
      Click on the Tinder Bingo extension icon ("TB" - top right) to add players.
      Each player will automatically get some randomly chosen words. You can reroll these as many times as you want.
      The randomly chosen words were collected from female profiles - most of them English or German.
      If your demographic differs from that, you may want to edit most words manually.
      You can do so by clicking on the words on a Bingo board.
    </div>
    <div>
      Start the Madness by clicking on the button on top.
      If the algorithm gets stuck, just press on stop and start again. Enjoy!
    </div>
  </div>;

export default Instructions
