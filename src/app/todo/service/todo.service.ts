import {  inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from 'src/app/services/logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_API } from 'src/app/config/api.config';

export interface TodoApiResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  logger = inject(LoggerService);
  httpClient = inject(HttpClient);
  constructor() {}

  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   * Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1);
    }
    return false;
  }

  /**
   * Logger la liste des todos
   */
  logTodos() {
    this.logger.log(this.todos);
  }

  getTodoViaApi(): Observable<TodoApiResponse> {
    return this.httpClient.get<TodoApiResponse>(APP_API.todo);
  }
}
