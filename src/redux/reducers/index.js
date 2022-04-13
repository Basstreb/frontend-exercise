import { combineReducers } from "redux";
import planets from './planets';
import starships from './starships';
import people from './people';
import vehicles from './vehicles';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const reducers = combineReducers({
    planets,
    starships,
    vehicles,
    people,
  });

  return reducers(state, action);
};
