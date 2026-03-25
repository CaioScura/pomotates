import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { chatboxOutline, playCircle, playOutline, statsChartOutline, search, menuOutline, notificationsOutline } from 'ionicons/icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonButton,
    IonButtons,
    IonHeader, IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar
  ],
})

export class HomeComponent {


  constructor() {
    addIcons({ chatboxOutline, playCircle, playOutline, statsChartOutline, search, menuOutline, notificationsOutline });
  }


}
