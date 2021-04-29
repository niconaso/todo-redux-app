import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { deleteTodo, editTodo, toggleTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @ViewChild('inputText') inputText: ElementRef;

  checkCompleted: FormControl;
  textInput: FormControl;

  isEditing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(null, [Validators.required]);

    this.checkCompleted.valueChanges.subscribe(() => this.toggleComplete());
  }

  enableEdit() {
    this.isEditing = true;

    this.textInput.setValue(this.todo.text);

    setTimeout(() => {
      this.inputText.nativeElement.select();
    }, 1);
  }

  @HostListener('keydown.escape')
  cancelEdit() {
    this.isEditing = false;

    if (this.textInput.valid) {
      this.store.dispatch(
        editTodo({
          id: this.todo.id,
          text: this.textInput.value,
        })
      );
    }
  }

  deleteTodo() {
    this.store.dispatch(
      deleteTodo({
        id: this.todo.id,
      })
    );
  }

  private toggleComplete() {
    this.store.dispatch(
      toggleTodo({
        id: this.todo.id,
      })
    );
  }
}
