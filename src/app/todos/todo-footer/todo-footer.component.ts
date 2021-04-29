import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterType, setFilter } from 'src/app/filter/filter.actions';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: FilterType = 'all' as FilterType;

  filters: FilterType[] = ['all', 'completed', 'pendings'];

  totalPendingTodos: number = 0;

  /**
   * Creates an instance of TodoFooterComponent.
   * @param {Store<AppState>} store
   * @memberof TodoFooterComponent
   */
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.totalPendingTodos = state.todos.filter(
        (todo: Todo) => !todo.completed
      ).length;
    });
  }

  applyFilter(filter: FilterType) {
    this.store.dispatch(
      setFilter({
        filter,
      })
    );
  }

  deleteCompletedTodos() {
    this.store.dispatch(deleteCompleted());
  }
}
