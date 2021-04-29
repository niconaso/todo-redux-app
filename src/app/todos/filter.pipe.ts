import { Pipe, PipeTransform } from '@angular/core';
import { FilterType } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: FilterType): unknown {
    switch (filter) {
      case 'completed':
        return todos.filter((todo: Todo) => todo.completed);
      case 'pendings':
        return todos.filter((todo: Todo) => !todo.completed);

      default:
        return todos;
    }
  }
}
