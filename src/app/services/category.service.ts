import { inject, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
  private _storage!: Storage; // Instancia de almacenamiento
  private categories: Category[] = []; // Lista en memoria de categorías
  readonly storage = inject(Storage);

  // Inicializa el servicio cargando las categorías almacenadas
  async init() {
    this._storage = await this.storage.create();
    const stored = await this._storage.get('categories');
    this.categories = stored || [];
  }

  // Devuelve una copia de la lista de categorías
  getCategories(): Category[] {
    return [...this.categories];
  }

   // Agrega una nueva categoría y la guarda en el almacenamiento
  async addCategory(category: Category) {
    this.categories.push(category);
    await this._storage.set('categories', this.categories);
  }

  // Actualiza una categoría existente por su ID
  async updateCategory(updated: Category) {
    this.categories = this.categories.map(cat =>
      cat.id === updated.id ? updated : cat
    );
    await this._storage.set('categories', this.categories);
  }

  // Elimina una categoría por su ID
  async deleteCategory(id: number) {
    this.categories = this.categories.filter(cat => cat.id !== id);
    await this._storage.set('categories', this.categories);
  }
}

