// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },           // default route
  { path: 'login', component: LoginComponent },      // /login route
  { path: '**', redirectTo: '', pathMatch: 'full' }  // catch-all to login
];
