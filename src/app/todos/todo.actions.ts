import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[TODO] Add', props<{ text: string }>());
export const toggleTodo = createAction(
  '[TODO] Toggle complete',
  props<{
    id: number;
  }>()
);
export const editTodo = createAction(
  '[TODO] Edit',
  props<{
    id: number;
    text: string;
  }>()
);
export const deleteTodo = createAction(
  '[TODO] Delete',
  props<{
    id: number;
  }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle All',
  props<{ checked: boolean }>()
);

export const deleteCompleted = createAction('[TODO] Delete completed');
