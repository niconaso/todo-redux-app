import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  addTodo,
  deleteCompleted,
  deleteTodo,
  editTodo,
  toggleAll,
  toggleTodo,
} from './todo.actions';

const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  // Add
  on(addTodo, (state, { text }) => [...state, new Todo(text)]),
  // Toggle status
  on(toggleTodo, (state, { id }) => {
    return state.map<Todo>((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  // Edit
  on(editTodo, (state, { id, text }) => {
    return state.map<Todo>((todo: Todo) =>
      todo.id === id
        ? {
            ...todo,
            text,
          }
        : todo
    );
  }),
  // Delete
  on(deleteTodo, (state, { id }) => {
    return state.filter((todo: Todo) => todo.id !== id);
  }),
  // Toggle All
  on(toggleAll, (state, { checked }) => {
    return state.map((todo: Todo) => ({
      ...todo,
      completed: checked,
    }));
  }),
  // Delete completed
  on(deleteCompleted, (state) => state.filter((todo: Todo) => !todo.completed))
);

export function todoReducer(state: Todo[], action: Action) {
  return _todoReducer(state, action);
}
