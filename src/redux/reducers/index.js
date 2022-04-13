import { combineReducers } from "redux";
import people from './people';
import planets from './planets';
import starships from './starships';
import vehicles from './vehicles';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const reducers = combineReducers({
    people,
    planets,
    starships,
    vehicles,
  });

  return reducers(state, action);
};
