import { inject, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Todo } from '../models/todo.interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private storageKey = 'todos';
  readonly storage = inject(Storage);

  async init() {
    await this.storage.create();
    this.todos = (await this.storage.get(this.storageKey)) || [];
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  async addTodo(title: string, categoryId?: number) {
  const newTodo: Todo = {
    id: Date.now(),
    title,
    completed: false,
    categoryId,
  };
  this.todos.unshift(newTodo);
  await this.storage.set('todos', this.todos);
}

  async toggleCompleted(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      await this.save();
    }
  }

  async deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    await this.save();
  }

  private async save() {
    await this.storage.set(this.storageKey, this.todos);
  }
}
