import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Projects } from './projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Header,
  },
  { path: 'projects', component: Projects },
];
