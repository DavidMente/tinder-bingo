import React, {FunctionComponent} from "react";
import './Instructions.scss';

const Instructions: FunctionComponent = () =>
  <div className={'instructions'}>
    <div className={'header'}>Tinder Bingo Instructions</div>
    <div>
      Click on the Tinder Bingo extension icon ("TB" - top right) to add players.
    </div>
    <div>
      Each player will automatically get some randomly chosen words.
      The algorithm will search for these exact words in Tinder profiles. Collect enough hits to get a Bingo.
      You can reroll the random words as many times as you want by clicking on "randomize words".
      The randomly chosen words were collected from female profiles - most of them English or German.
      If your demographic differs from that, you may want to edit most words manually.
      You can do so by clicking on the words on a Bingo board.
    </div>
    <div>
      Start the Madness by clicking on the button on top.
      If the algorithm gets stuck, just press on stop and start again.
    </div>
    <div>
      After a few thousand profiles, Tinder will usually stop showing more profile. This depends on the amount of
      profiles available in your region.
      I recommend setting the range as high as possible. If there are no more profiles, you will have to wait a few
      hours to play again.
    </div>
    <div>
      Enjoy!
    </div>
  </div>;

export default Instructions
