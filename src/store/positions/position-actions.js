import { ADD_POSITIONS } from './position-const';

export const addPositions = (positions) => ({
  type: ADD_POSITIONS,
  positions,
});
