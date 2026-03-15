import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonButton, 
  IonItem, 
  IonInput, 
  IonLabel 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    IonLabel
  ],
})

export class LoginComponent {
    loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
