import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Todo } from './model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private http = inject(HttpClient);
  private BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
  getTodos() {
    return this.http.get<Todo[]>(this.BASE_URL);
  }

  updateTodo(id: number) {
    return this.http.put<Todo>(
      `${this.BASE_URL}/${id}`,
      JSON.stringify({
        id,
        title: randText(),
      }),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
  }

  deleteTodo(id: number) {
    return this.http.delete<Todo>(
      `${this.BASE_URL}/${id}`
    );
  }
}
