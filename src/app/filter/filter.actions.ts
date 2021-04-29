import { createAction, props } from '@ngrx/store';

type FilterType = 'all' | 'completed' | 'pendings';

export {FilterType};

export const setFilter = createAction(
  '[FILTER] Set filter',
  props<{
    filter: FilterType;
  }>()
);
