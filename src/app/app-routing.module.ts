import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'justin', loadChildren: () => import('./justin/justin.module').then(m => m.JustinModule) },
  { path: 'julien', loadChildren: () => import('./julien/julien.module').then(m => m.JulienModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
