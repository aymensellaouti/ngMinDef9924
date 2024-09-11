import { Component, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  // Tmathel la liste eli bech naffichiwha fel view
  todos: Todo[] = [];
  // Tmathel l'inputet eli fel view
  todo = new Todo();
  todoService = inject(TodoService);
  constructor() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
