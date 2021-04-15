import { createStore  } from 'redux';
import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './root-reducer';



export const store = createStore(rootReducer, composeWithDevTools());

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };