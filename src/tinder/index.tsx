import {Store} from "webext-redux";
import {render} from "react-dom";
import {Provider} from "react-redux";
import * as React from "react";
import Controls from "./controls/Controls";
import {getProfile, setupDom} from "../utils/dom";
import ProfileComponent from "./content/ProfileComponent";
import {setProfile} from "../store/profile/actions";
import PlayersSection from "./players/PlayersSection";

setupDom(() => {
  const store = new Store();
  store.ready().then(() => {

    const profileWatcher = setInterval(updateProfile, 100);

    function updateProfile() {
      const profile = getProfile();
      store.dispatch(setProfile(profile));
    }

    render(
      <Provider store={store}>
        <Controls />
        <PlayersSection />
        <ProfileComponent />
      </Provider>, document.getElementById('bingo-controls'));
  });

});
