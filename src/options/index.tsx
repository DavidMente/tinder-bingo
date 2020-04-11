import * as React from 'react';
import {Provider} from "react-redux";
import Options from "./Options";
import {Store} from "webext-redux";
import {render} from "react-dom";

const store = new Store();

store.ready().then(() => {
  render(
    <Provider store={store}>
      <Options />
    </Provider>, document.getElementById('options'));
});
