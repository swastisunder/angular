import { Routes } from '@angular/router';
import { User } from './user/user';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users/:id', component: User },
];
