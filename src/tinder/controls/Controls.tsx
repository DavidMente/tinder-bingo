import React, {FunctionComponent} from "react";
import "./Controls.scss";
import StartButton from "./StartButton";
import BingoImage from "./BingoImage";

const Controls: FunctionComponent = () =>
  <div>
    <StartButton />
    <BingoImage />
  </div>;

export default Controls;
