import { Component, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { ToastrService } from 'ngx-toastr';



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
  toastr = inject(ToastrService);
  constructor() {
    this.toastr.info('Todo List')
    this.todos = this.todoService.getTodos();
    this.todoService.getTodoViaApi().subscribe({
      next: (todos) => {console.log(todos);},
      error: (e) => {},
      complete: () => {}
    })
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
