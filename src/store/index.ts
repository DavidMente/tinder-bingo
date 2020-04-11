import {combineReducers, createStore} from "redux";
import {playersReducer} from "./players/reducers";
import {profileReducer} from "./profile/reducers";
import {wordsReducer} from "./words/reducers";
import {controlsReducer} from "./controls/reducers";

const rootReducer = combineReducers({
  players: playersReducer,
  profile: profileReducer,
  words: wordsReducer,
  controls: controlsReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);
