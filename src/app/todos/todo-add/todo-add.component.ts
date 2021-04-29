import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { addTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  text: FormControl = new FormControl('', [Validators.required]);

  constructor(private store: Store<AppState>) {}

  addTodo() {
    if (this.text.valid) {
      this.store.dispatch(
        addTodo({
          text: this.text.value,
        })
      );
      this.text.reset();
    }
  }
}
