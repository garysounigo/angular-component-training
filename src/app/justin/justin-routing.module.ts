import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JustinComponent } from './justin.component';

const routes: Routes = [{ path: '', component: JustinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JustinRoutingModule { }
