import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './filter-const';

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});

export const clearFilter = {
  type: CLEAR_FILTER,
};
