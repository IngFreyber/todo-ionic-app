import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonCheckbox, IonContent,
  IonHeader, IonIcon, IonInput, IonItem, IonList,
  IonTitle, IonToolbar, IonLabel, IonSelectOption,
  IonSelect, IonCardHeader, IonCard, IonCardContent,
  IonCardTitle, IonAvatar, ModalController, IonAlert
} from '@ionic/angular/standalone';
import { Todo } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { CategoryModalComponent } from '../shared/modals/category-modal/category-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonAlert, IonAvatar, IonCardTitle,
    IonCardContent, IonCard,
    IonCardHeader, IonLabel,
    IonIcon, IonList,
    IonItem, IonCheckbox,
    IonButton, IonHeader,
    IonToolbar, IonTitle,
    IonContent, IonSelect,
    FormsModule, CommonModule,
    IonSelectOption, IonInput],
  providers: [TodoService, CategoryService, ModalController]
})
export class HomePage implements OnInit {

  // =======================
  // Estado del componente
  // =======================
  todos: Todo[] = [];
  newTask = '';
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  newCategory: string = '';
  newTaskCategoryId?: number;
  showDeleteConfirm = false;
  categoryToDeleteId: number | null = null;
  // =======================
  // Configuración de alertas
  // =======================
  alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        this.showDeleteConfirm = false;
      }
    },
    {
      text: 'Eliminar',
      handler: () => {
        this.confirmDeleteCategory();
      }
    }
  ];
  // =======================
  // Inyecciones
  // =======================
  readonly todoService = inject(TodoService);
  readonly categoryService = inject(CategoryService);
  readonly modalCtrl = inject(ModalController);

  // =======================
  // Ciclo de vida
  // =======================
  async ngOnInit() {
    await this.todoService.init();
    await this.categoryService.init();
    this.todos = this.todoService.getTodos();
    this.categories = this.categoryService.getCategories();
    this.loadCategories();

  }
  // =======================
  // Métodos de categorías
  // =======================
  loadCategories() {
    this.categories = this.categoryService.getCategories();
  }

  // Metodo de seleccion tareas
  async toggleTodo(todo: Todo) {
    await this.todoService.toggleCompleted(todo.id);
  }

  // Metodo que permite eliminar una tarea
  async deleteTodo(todo: Todo) {
    await this.todoService.deleteTodo(todo.id);
    this.todos = this.todoService.getTodos();
  }

  // Metodo para filtrar por categoria
  get filteredTodos() {
    if (this.selectedCategoryId === null) return this.todos;
    return this.todos.filter(t => t.categoryId === this.selectedCategoryId);
  }

  // =======================
  // Métodos de tareas
  // =======================
  async addTodo() {
    if (!this.newTask.trim()) return;
    await this.todoService.addTodo(this.newTask, this.newTaskCategoryId);
    this.newTask = '';
    this.todos = this.todoService.getTodos();
  }

  async addCategory() {
    if (!this.newCategory.trim()) return;
    const newId = Date.now();
    await this.categoryService.addCategory({ id: newId, name: this.newCategory });
    this.newCategory = '';
    this.loadCategories();
  }

  async editCategory(category: Category) {
    const modal = await this.modalCtrl.create({
      component: CategoryModalComponent,
      componentProps: { category: { ...category } },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data?.name) {
      category.name = data.name;
      await this.categoryService.updateCategory(category);
      this.loadCategories();
    }
  }

  async deleteCategory(id: number) {
    this.categoryToDeleteId = id;
    this.showDeleteConfirm = true;
  }

  async confirmDeleteCategory() {
    if (this.categoryToDeleteId != null) {
      await this.categoryService.deleteCategory(this.categoryToDeleteId);
      this.loadCategories();
      this.showDeleteConfirm = false;
      this.categoryToDeleteId = null;
    }
  }

}
