import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home',  },

  { path: '',
     redirectTo: 'home', pathMatch: 'full' }
];
