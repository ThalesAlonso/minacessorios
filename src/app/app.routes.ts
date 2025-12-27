import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'MinAcessórios | Laços de cabelo e acessórios femininos'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
