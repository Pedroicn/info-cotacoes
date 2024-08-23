import { Routes } from '@angular/router';
import {PaginaInicialComponent} from "./pagina-inicial/pagina-inicial.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PaginaInicialComponent
  }
];
