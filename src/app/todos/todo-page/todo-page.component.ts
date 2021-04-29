import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  checkAll: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkAll = new FormControl(false);
    this.checkAll.valueChanges.subscribe((checked: boolean) =>
      this.toggleAllTodos(checked)
    );
  }

  private toggleAllTodos(checked: boolean) {
    this.store.dispatch(
      toggleAll({
        checked,
      })
    );
  }
}
