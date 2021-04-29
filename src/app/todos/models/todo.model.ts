export class Todo {
  id: number;
  text: string;
  completed: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = new Date().getTime();
    this.completed = false;
  }
}
