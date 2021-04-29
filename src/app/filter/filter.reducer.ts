import { Action, createReducer, on } from '@ngrx/store';
import { FilterType, setFilter } from './filter.actions';

export const initialState: FilterType = "all" as FilterType;

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (_, { filter }) => filter)
);

export function filterReducer(state: FilterType, action: Action) {
  return _filterReducer(state, action);
}
