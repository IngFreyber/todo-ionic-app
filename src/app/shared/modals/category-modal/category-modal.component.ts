import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput, IonItem,
  IonLabel,
  IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
  imports: [IonButtons, IonLabel, IonItem,
    IonButton, IonHeader,
    IonToolbar, IonTitle,
    IonContent, FormsModule,
    CommonModule, IonInput],
    providers: [ModalController]
})
export class CategoryModalComponent implements OnInit {

 @Input() category!: Category;
  newName!: string;
  readonly modalCtrl = inject(ModalController);

  ngOnInit() {
    this.newName = '';
  }

  ionViewWillEnter() {
    this.newName = this.category.name;
  }

  dismiss(save: boolean) {
    if (save && this.newName.trim()) {
      this.modalCtrl.dismiss({ name: this.newName.trim() });
    } else {
      this.modalCtrl.dismiss();
    }
  }

}
