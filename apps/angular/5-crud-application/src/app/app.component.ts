import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from './model';
import { TodoService } from './todo.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of todos" class="mb-20">
      {{ todo.title }}
      <div class="mt-20">
        <button (click)="update(todo.id)" class="mr-20">Update</button>
        <button (click)="delete(todo.id)">Delete</button>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  todos!: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  public update(id: number) {
    this.todoService.updateTodo(id).subscribe((todoUpdated: Todo) => {
      this.todos = this.todos.map((t) => {
        if (t.id === todoUpdated.id) {
          return todoUpdated;
        }
        return t;
      });
    });
  }

  public delete(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== id);
    });
  }
}
