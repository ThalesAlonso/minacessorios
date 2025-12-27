import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Mina Acessórios | Laços de cabelo e acessórios femininos'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
