import {  Injectable } from '@angular/core';
import { Todo } from '../model/todo';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {}

  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return [];
  }

  /**
   * Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {

  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    return true;
  }

  /**
   * Logger la liste des todos
   */
  logTodos() {

  }
}
