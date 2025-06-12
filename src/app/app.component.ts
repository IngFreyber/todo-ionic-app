import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { fetchAndActivate, getString } from 'firebase/remote-config';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { app, remoteConfig } from 'src/firebase-config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() {
    addIcons(allIcons);
    console.log('Firebase inicializado:', app);
  }

  ngOnInit() {
    fetchAndActivate(remoteConfig)
      .then(() => {
        const welcomeMessage = getString(remoteConfig, 'welcome_message');
        console.log('Mensaje remoto:', welcomeMessage);
      })
      .catch((err) => {
        console.error('Error al activar Remote Config:', err);
      });
  }
}
