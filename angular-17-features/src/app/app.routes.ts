import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./user/user.component').then((c) => c.UserComponent),
  },
];
