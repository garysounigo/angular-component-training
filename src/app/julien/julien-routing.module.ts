import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JulienComponent } from './julien.component';

const routes: Routes = [{ path: '', component: JulienComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JulienRoutingModule { }
