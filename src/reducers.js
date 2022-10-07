import { combineReducers } from 'redux';

import appReducer from 'containers/App/reducer';
import characterReducer from 'containers/CharacterSelect/reducer';
import homeReducer from './containers/Home/reducer';
import factoryReducer from './containers/Factory/reducer';

export default () =>
  combineReducers({
    app: appReducer,
    characters: characterReducer,
    factory: factoryReducer,
    dataOwner: homeReducer,
  });
