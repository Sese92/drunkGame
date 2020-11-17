import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as configurationReducer } from './features/gameConfiguration/configuration.store';

const appReducer = combineReducers({
  configuration: configurationReducer,
});

const reducer = (state, action) => {
  return appReducer(state, action);
};

const store = configureStore({
  reducer,
});

export { store };
